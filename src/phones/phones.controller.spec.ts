import { PHONE_REPOSITORY_TOKEN, PhoneEntity } from './phones.repository';
import { PhoneRepositoryFake, phoneFixture } from './phones.repository.fake';
import { Test, TestingModule } from '@nestjs/testing';

import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';

describe('PhonesController', () => {
  let controller: PhonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonesController],
      providers: [
        PhonesService,
        {
          provide: PHONE_REPOSITORY_TOKEN,
          useClass: PhoneRepositoryFake,
        },
      ],
    }).compile();

    controller = module.get<PhonesController>(PhonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a phone matching the id passed as param', async () => {
      expect(await controller.getPhoneDetails({ id: phoneFixture.id })).toEqual(
        phoneFixture,
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of phones', async () => {
      const result = [phoneFixture];

      expect(await controller.getPhoneList()).toEqual(result);
    });
  });

  describe('create', () => {
    it('should return the created phone', async () => {
      const phoneToCreate: CreatePhoneDTO = {
        name: 'string',
        manufacturer: 'string',
        description: 'string',
        color: 'string',
        price: 0,
        imageFileName: 'string',
        screen: 'string',
        processor: 'string',
        ram: 'string',
      };
      const result = PhoneEntity.fromPrimitives({
        ...phoneToCreate,
        _id: '1',
      });

      expect(await controller.createPhone(phoneToCreate)).toEqual(result);
    });
  });

  describe('update', () => {
    it('should return the updated phone', async () => {
      const phoneUpdate: CreatePhoneDTO = {
        name: 'a',
        manufacturer: 'a',
        description: 'a',
        color: 'a',
        price: 1,
        imageFileName: 'a',
        screen: 'a',
        processor: 'a',
        ram: 'a',
      };
      const result = PhoneEntity.fromPrimitives({
        ...phoneUpdate,
        _id: phoneFixture.id,
      });

      expect(
        await controller.updatePhone({ id: phoneFixture.id }, phoneUpdate),
      ).toEqual(result);
    });
  });
});
