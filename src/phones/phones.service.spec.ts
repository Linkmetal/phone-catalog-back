import { HttpException, HttpStatus } from '@nestjs/common';
import {
  PHONE_REPOSITORY_TOKEN,
  PhoneEntity,
  PhoneRepository,
} from './phones.repository';
import {
  PhoneRepositoryFake,
  phoneFixture,
  phonesFixture,
} from './phones.repository.fake';
import { Test, TestingModule } from '@nestjs/testing';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhonesService } from './phones.service';

describe('PhonesService', () => {
  let service: PhonesService;
  let cloudinaryService: CloudinaryService;
  let repository: PhoneRepositoryFake;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PhonesService,
        CloudinaryService,
        {
          provide: PHONE_REPOSITORY_TOKEN,
          useClass: PhoneRepositoryFake,
        },
      ],
    }).compile();
    repository = module.get<PhoneRepository>(PHONE_REPOSITORY_TOKEN);
    service = module.get<PhonesService>(PhonesService);
    cloudinaryService = module.get<CloudinaryService>(CloudinaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a phone matching the id passed as param', async () => {
      expect(await service.findOne(phoneFixture.id)).toEqual(phoneFixture);
    });

    it('should return error on phone not found', async () => {
      const t = async () => {
        await service.findOne('1');
      };
      expect(await t).rejects.toThrowError(
        new HttpException('Not found', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of phones', async () => {
      const result = {
        data: [...phonesFixture],
        pagination: { offset: 0, pageTake: 9, total: 2 },
      };

      expect(
        await service.findAll({
          manufacturer: [],
          maxPrice: 1500,
          minPrice: 0,
          offset: 0,
          pageTake: 9,
          ram: [],
          searchQuery: '',
        }),
      ).toEqual(result);
    });
  });

  describe('create', () => {
    const phoneToCreate: CreatePhoneDTO = {
      name: 'string',
      manufacturer: 'string',
      description: 'string',
      color: 'string',
      price: 0,
      imageSrc: 'string',
      screen: 'string',
      processor: 'string',
      ram: 'string',
    };
    it('should return the created phone', async () => {
      const result = PhoneEntity.fromPrimitives({
        ...phoneToCreate,
        _id: '1',
        imageSrc: '',
      });

      expect(await service.create(phoneToCreate)).toEqual(result);
    });

    it('should return error on phone not name duplicated', async () => {
      const t = async () => {
        await service.create({ ...phoneToCreate, name: phoneFixture.name });
      };
      expect(await t).rejects.toThrowError(
        new HttpException(
          `A phone with name ${phoneFixture.name} already exists`,
          HttpStatus.BAD_REQUEST,
        ),
      );
    });

    it('should return error on phone creation error', async () => {
      jest.spyOn(repository, 'create').mockResolvedValue(null);
      const t = async () => {
        await service.create({ ...phoneToCreate, name: '' });
      };
      expect(await t).rejects.toThrowError(
        new HttpException(
          'Error while insterting new phone',
          HttpStatus.BAD_REQUEST,
        ),
      );
    });
  });

  describe('update', () => {
    const phoneUpdate: CreatePhoneDTO = {
      name: 'a',
      manufacturer: 'a',
      description: 'a',
      color: 'a',
      price: 1,
      imageSrc: 'a',
      screen: 'a',
      processor: 'a',
      ram: 'a',
    };

    it('should return the updated phone', async () => {
      const result = PhoneEntity.fromPrimitives({
        ...phoneUpdate,
        _id: phoneFixture.id,
      });

      expect(
        await service.findOneAndUpdate(phoneFixture.id, phoneUpdate),
      ).toEqual(result);
    });

    it('should return error on phone not found', async () => {
      const t = async () => {
        await service.findOneAndUpdate('1', phoneUpdate);
      };
      expect(await t).rejects.toThrowError(
        new HttpException('Error while updating phone', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('delete', () => {
    it('should delete', async () => {
      expect(await service.findOneAndDelete(phoneFixture.id)).toEqual(true);
    });

    it('should return error on phone not found', async () => {
      const t = async () => {
        await service.findOneAndDelete('1');
      };
      expect(await t).rejects.toThrowError(
        new HttpException('Error while deleting phone', HttpStatus.NOT_FOUND),
      );
    });
  });

  describe('uploadImage', () => {
    const file: Express.Multer.File = {
      buffer: ['a'],
      destination: './',
      filename: 'file',
      fieldname: 'file',
      mimetype: 'image/jpg',
      size: 1,
    } as unknown as Express.Multer.File;

    it('should upload image', async () => {
      jest
        .spyOn(cloudinaryService, 'uploadImage')
        .mockResolvedValue({ secure_url: 'secure_url' } as UploadApiResponse);
      expect(await service.uploadImage(file, phoneFixture.id)).toEqual({
        ...phoneFixture,
        imageSrc: 'secure_url',
      });
    });

    it('should return error on phone not found', async () => {
      const t = async () => {
        await service.uploadImage(file, '1');
      };
      expect(await t).rejects.toThrowError(
        new HttpException(`Phone with id 1 not found`, HttpStatus.NOT_FOUND),
      );
    });

    it('should return error on image uploadError', async () => {
      jest
        .spyOn(cloudinaryService, 'uploadImage')
        .mockRejectedValue({ message: 'error' } as UploadApiErrorResponse);
      const t = async () => {
        await service.uploadImage(file, phoneFixture.id);
      };
      expect(await t).rejects.toThrowError(
        new HttpException(
          'Error while uploading image',
          HttpStatus.BAD_REQUEST,
        ),
      );
    });
  });
});
