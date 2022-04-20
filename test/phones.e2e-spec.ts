import * as request from 'supertest';

import {
  PHONE_REPOSITORY_TOKEN,
  PhoneEntity,
  PhoneRepository,
} from '../src/phones/phones.repository';
import {
  PhoneCollectionName,
  PhoneSchema,
} from '../src/phones/schemas/phone.schema';
import { Test, TestingModule } from '@nestjs/testing';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../test/MongooseTestModule';

import { CloudinaryService } from '../src/cloudinary/cloudinary.service';
import { CreatePhoneDTO } from '../src/phones/dtos/create-phone.dto';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhoneDTO } from '../src/phones/dtos/phone.dto';
import { PhoneRepositoryMongoDB } from '../src/phones/phones.repository.mongodb';
import { PhonesModule } from '../src/phones/phones.module';
import { UploadApiResponse } from 'cloudinary';
import { phonesFixture } from '../src/phones/phones.repository.fake';

describe('PhonesController (e2e)', () => {
  let app: INestApplication;
  let cloudinaryService: CloudinaryService;
  let repository: PhoneRepository;
  let result1: PhoneEntity;
  let result2: PhoneEntity;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PhonesModule,
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: PhoneCollectionName, schema: PhoneSchema },
        ]),
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    repository = module.get<PhoneRepositoryMongoDB>(PHONE_REPOSITORY_TOKEN);
    cloudinaryService = module.get<CloudinaryService>(CloudinaryService);
    result1 =
      (await repository.create({ ...phonesFixture[0] })) || ({} as PhoneEntity);

    result2 =
      (await repository.create({ ...phonesFixture[1] })) || ({} as PhoneEntity);
  });

  afterAll(() => {
    closeInMongodConnection();
  });

  it('/phones (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/phones/?pageTake=9&offset=0')
      .expect(200)
      .expect({
        data: [
          { ...PhoneDTO.fromEntity({ ...result1 }) },
          { ...PhoneDTO.fromEntity({ ...result2 }) },
        ],
        pagination: { offset: '0', pageTake: '9', total: 2 },
      });
  });

  it('/phones filtering by name (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/phones/?pageTake=9&offset=0&searchQuery=8')
      .expect(200)
      .expect({
        data: [{ ...PhoneDTO.fromEntity({ ...result2 }) }],
        pagination: { offset: '0', pageTake: '9', total: 1 },
      });
  });

  it('/phones filtering by manufacturer (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/phones/?pageTake=9&offset=0&manufacturer=Xiaomi')
      .expect(200)
      .expect({
        data: [{ ...PhoneDTO.fromEntity({ ...result2 }) }],
        pagination: { offset: '0', pageTake: '9', total: 1 },
      });
  });

  it('/phones filtering by ram (GET)', () => {
    return request(app.getHttpServer())
      .get(`/api/v1/phones/?pageTake=9&offset=0&ram=2 GB`)
      .expect(200)
      .expect({
        data: [{ ...PhoneDTO.fromEntity({ ...result1 }) }],
        pagination: { offset: '0', pageTake: '9', total: 1 },
      });
  });

  it('/phones filtering by price (GET)', () => {
    return request(app.getHttpServer())
      .get(`/api/v1/phones/?pageTake=9&offset=0&minPrice=1&maxPrice=1000`)
      .expect(200)
      .expect({
        data: [{ ...PhoneDTO.fromEntity({ ...result1 }) }],
        pagination: { offset: '0', pageTake: '9', total: 1 },
      });
  });

  it('/phones/:id (GET)', () => {
    return request(app.getHttpServer())
      .get(`/api/v1/phones/${result1.id}`)
      .expect(200)
      .expect({ ...PhoneDTO.fromEntity({ ...result1 }) });
  });

  it('/phones/:id (PUT)', () => {
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
    return request(app.getHttpServer())
      .put(`/api/v1/phones/${result1.id}`)
      .send(phoneUpdate)
      .expect(200)
      .expect({ ...PhoneDTO.fromEntity({ ...phoneUpdate, id: result1.id }) });
  });

  it('/phones/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete(`/api/v1/phones/${result1.id}`)
      .expect(200)
      .expect('true');
  });

  it('/phones/:id/image (POST)', () => {
    jest
      .spyOn(cloudinaryService, 'uploadImage')
      .mockResolvedValue({ secure_url: 'asd' } as UploadApiResponse);
    const file: Express.Multer.File = {
      buffer: ['a'],
      destination: './',
      filename: 'file',
      fieldname: 'file',
      mimetype: 'image/jpg',
      size: 1,
    } as unknown as Express.Multer.File;
    return request(app.getHttpServer())
      .post(`/api/v1/phones/${result1.id}/image`)
      .send(file)
      .expect(201)
      .expect({ ...PhoneDTO.fromEntity({ ...result1, imageSrc: 'asd' }) });
  });
});
