import { PhoneEntity, PhoneRepository } from './phones.repository';

import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { UpdatePhoneDTO } from 'src/phones/dtos/update-phone.dto';

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
  findOneAndUpdate(
    id: string,
    updatePhoneDto: UpdatePhoneDTO,
  ): Promise<PhoneEntity | null> {
    if (id !== phoneFixture.id) return Promise.resolve(null);
    return Promise.resolve(
      PhoneEntity.fromPrimitives({ ...updatePhoneDto, _id: phoneFixture.id }),
    );
  }

  findOne(id: string): Promise<PhoneEntity | null> {
    if (id !== phoneFixture.id) return Promise.resolve(null);
    return Promise.resolve(phoneFixture);
  }
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
