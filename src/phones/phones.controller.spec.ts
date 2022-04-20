import { PhoneRepositoryFake, phoneFixture } from './phones.repository.fake';
import { Test, TestingModule } from '@nestjs/testing';

import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PHONE_REPOSITORY_TOKEN } from './phones.repository';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import { UploadApiResponse } from 'cloudinary';

describe('PhonesController', () => {
  let service: PhonesService;
  let cloudinaryService: CloudinaryService;
  let controller: PhonesController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonesController],
      providers: [
        PhonesService,
        CloudinaryService,
        {
          provide: PHONE_REPOSITORY_TOKEN,
          useClass: PhoneRepositoryFake,
        },
      ],
    }).compile();

    service = module.get<PhonesService>(PhonesService);
    cloudinaryService = module.get<CloudinaryService>(CloudinaryService);
    controller = module.get<PhonesController>(PhonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getPhoneDetails', () => {
    it('should call findOne', async () => {
      const spy = jest.spyOn(service, 'findOne');
      await controller.getPhoneDetails({ id: phoneFixture.id });
      expect(spy).toHaveBeenCalledWith(phoneFixture.id);
    });
  });

  describe('getPhoneList', () => {
    it('should call findAll', async () => {
      const spy = jest.spyOn(service, 'findAll');
      const query = {
        manufacturer: [],
        maxPrice: 1500,
        minPrice: 0,
        offset: 0,
        pageTake: 9,
        ram: [],
        searchQuery: '',
      };
      await controller.getPhoneList(query);

      expect(spy).toHaveBeenCalledWith(query);
    });
  });

  describe('createPhone', () => {
    it('should call create', async () => {
      const spy = jest.spyOn(service, 'create');
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

      await controller.createPhone(phoneToCreate);

      expect(spy).toHaveBeenCalledWith(phoneToCreate);
    });
  });

  describe('updatePhone', () => {
    it('should call findOneAndUpdate', async () => {
      const spy = jest.spyOn(service, 'findOneAndUpdate');

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

      await controller.updatePhone({ id: phoneFixture.id }, phoneUpdate);

      expect(spy).toHaveBeenCalledWith(phoneFixture.id, phoneUpdate);
    });
  });

  describe('deletePhone', () => {
    it('should call findOneAndUpdate', async () => {
      const spy = jest.spyOn(service, 'findOneAndDelete');

      await controller.deletePhone({ id: phoneFixture.id });

      expect(spy).toHaveBeenCalledWith(phoneFixture.id);
    });
  });

  describe('uploadPhoneImage', () => {
    it('should call uploadImage', async () => {
      const spy = jest.spyOn(service, 'uploadImage');
      jest
        .spyOn(cloudinaryService, 'uploadImage')
        .mockResolvedValue({ secure_url: 'secure_url' } as UploadApiResponse);

      const file: Express.Multer.File = {
        buffer: ['a'],
        destination: './',
        filename: 'file',
        fieldname: 'file',
        mimetype: 'image/jpg',
        size: 1,
      } as unknown as Express.Multer.File;

      await controller.uploadPhoneImage(phoneFixture.id, file);

      expect(spy).toHaveBeenCalledWith(file, phoneFixture.id);
    });
  });
});
