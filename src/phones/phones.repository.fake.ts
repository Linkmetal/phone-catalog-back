import { PhoneEntity, PhoneRepository } from './phones.repository';

import { CreatePhoneDTO } from './dtos/create-phone.dto';

export const phoneFixture: PhoneEntity = {
  id: '6246f580bfca641423e5710f',
  name: 'iPhone 7',
  manufacturer: 'Apple',
  description: 'lorem ipsum dolor sit amet consectetur.',
  color: 'black',
  price: 769,
  imageFileName: 'null',
  screen: '4,7 inch IPS',
  processor: 'A10 Fusion',
  ram: '2GB',
};

export class PhoneRepositoryFake implements PhoneRepository {
  async findAll() {
    return Promise.resolve([{ ...phoneFixture }]);
  }
  async create(createPhoneDto: CreatePhoneDTO) {
    const result = PhoneEntity.fromPrimitives({
      ...createPhoneDto,
      _id: '1',
    });
    return Promise.resolve(result);
  }
}
