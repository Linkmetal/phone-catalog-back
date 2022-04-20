import {
  PHONE_REPOSITORY_TOKEN,
  PhoneEntity,
  PhoneFilters,
  PhoneRepository,
} from './phones.repository';
import { PhoneCollectionName, PhoneSchema } from './schemas/phone.schema';
import { Test, TestingModule } from '@nestjs/testing';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../../test/MongooseTestModule';

import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { MongooseModule } from '@nestjs/mongoose';
import { PhoneDTO } from './dtos/phone.dto';
import { PhoneRepositoryMongoDB } from './phones.repository.mongodb';
import { PhonesService } from './phones.service';
import { phonesFixture } from './phones.repository.fake';

describe('PhoneRepositoryMongoDB', () => {
  let repository: PhoneRepository;
  let result1: PhoneEntity | null;
  let result2: PhoneEntity | null;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: PhoneCollectionName, schema: PhoneSchema },
        ]),
      ],
      providers: [
        PhonesService,
        CloudinaryService,
        {
          provide: PhoneEntity,
          useClass: PhoneEntity,
        },
        {
          provide: PHONE_REPOSITORY_TOKEN,
          useClass: PhoneRepositoryMongoDB,
        },
      ],
    }).compile();

    repository = module.get<PhoneRepositoryMongoDB>(PHONE_REPOSITORY_TOKEN);

    result1 = await repository.create({ ...phonesFixture[0] });

    result2 = await repository.create({ ...phonesFixture[1] });
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findOne', () => {
    it('should return phone with given id', async () => {
      if (result1) {
        const result = await repository.findOne(result1?.id);
        expect(result).toEqual(result1);
      }
    });

    it('should return null if the phone doesnt exists', async () => {
      const result = await repository.findOne('625fe6c4bd700d96c452824d');
      expect(result).toBeNull();
    });
  });

  describe('findOneByName', () => {
    it('should return phone with given name', async () => {
      if (result1) {
        const result = await repository.findOneByName(result1?.name);
        expect(result).toEqual(result1);
      }
    });

    it('should return null if the phone doesnt exists', async () => {
      const result = await repository.findOneByName('asd');
      expect(result).toBeNull();
    });
  });

  describe('findAll', () => {
    it('should return all phones', async () => {
      const result = await repository.findAll({
        pageTake: 9,
        offset: 0,
      } as PhoneFilters);

      expect(result).toEqual({
        data: [result1, result2],
        pagination: { offset: 0, pageTake: 9, total: 2 },
      });
    });

    it('should filter by manufacturer', async () => {
      const query = {
        manufacturer: ['Xiaomi'],
        maxPrice: 1500,
        minPrice: 0,
        offset: 0,
        pageTake: 9,
        ram: undefined,
        searchQuery: '',
      };
      const result = await repository.findAll(query);

      expect(result).toEqual({
        data: [result2],
        pagination: { offset: 0, pageTake: 9, total: 1 },
      });
    });

    it('should filter by ram', async () => {
      const query = {
        manufacturer: undefined,
        maxPrice: 1500,
        minPrice: 0,
        offset: 0,
        pageTake: 9,
        ram: ['2 GB'],
        searchQuery: '',
      };
      const result = await repository.findAll(query);

      expect(result).toEqual({
        data: [result1],
        pagination: { offset: 0, pageTake: 9, total: 1 },
      });
    });

    it('should filter by name', async () => {
      const query = {
        manufacturer: undefined,
        maxPrice: 1500,
        minPrice: 0,
        offset: 0,
        pageTake: 9,
        ram: undefined,
        searchQuery: '8',
      };
      const result = await repository.findAll(query);

      expect(result).toEqual({
        data: [result2],
        pagination: { offset: 0, pageTake: 9, total: 1 },
      });
    });

    it('should filter by price', async () => {
      const query = {
        manufacturer: undefined,
        maxPrice: 999,
        minPrice: 1,
        offset: 0,
        pageTake: 9,
        ram: undefined,
        searchQuery: '',
      };
      const result = await repository.findAll(query);

      expect(result).toEqual({
        data: [result1],
        pagination: { offset: 0, pageTake: 9, total: 1 },
      });
    });
  });

  describe('create', () => {
    it('should create phone', async () => {
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

      const result = await repository.create(phoneToCreate);
      if (result)
        expect(result).toEqual(
          PhoneEntity.fromPrimitives({ ...phoneToCreate, _id: result.id }),
        );
    });
  });

  describe('findOneAndUpdate', () => {
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
    it('should update phone with the given id', async () => {
      if (result1) {
        const result = await repository.findOneAndUpdate(
          result1.id,
          phoneUpdate,
        );
        if (!result) return;
        expect(PhoneDTO.fromEntity(result)).toEqual({
          ...phoneUpdate,
          id: result1.id,
        });
      }
    });

    it('should return null if the phone doesnt exists', async () => {
      const result = await repository.findOneAndUpdate(
        '625fe6c4bd700d96c452824d',
        phoneUpdate,
      );

      expect(result).toBeNull();
    });
  });

  describe('findOneAndDelete', () => {
    it('should delete phone', async () => {
      if (result1) {
        const result = await repository.findOneAndDelete(result1.id);
        expect(result).toBeTruthy();
        expect(await repository.findOne(result1.id)).toBeFalsy();
      }
    });

    it('should return null if the phone doesnt exists', async () => {
      const result = await repository.findOneAndDelete(
        '625fe6c4bd700d96c452824d',
      );
      expect(result).toBeNull();
    });
  });
});
