import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';

import { INestApplication } from '@nestjs/common';
import { PhonesModule } from '../src/phones/phones.module';

describe('PhonesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PhonesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // SUPERTEST
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/phones/')
      .expect(200)
      .expect('Hello World!');
  });
});
