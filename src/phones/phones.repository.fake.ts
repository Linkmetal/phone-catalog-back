import {
  PhoneEntity,
  PhoneFilters,
  PhoneRepository,
} from './phones.repository';

import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PaginatedResponse } from '../types/PaginatedResponse';
import { UpdatePhoneDTO } from './dtos/update-phone.dto';

export const phonesFixture: PhoneEntity[] = [
  {
    id: '6246f580bfca641423e5710f',
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageSrc: 'null',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: '2GB',
  },
  {
    id: '6246f580bfca641423e5710f',
    name: 'iPhone 8',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 1032,
    imageSrc: 'null',
    screen: '5 inch IPS',
    processor: 'A10 Fusion',
    ram: '2GB',
  },
];
export const phoneFixture = phonesFixture[0];

export class PhoneRepositoryFake implements PhoneRepository {
  findOneByName(name: string): Promise<PhoneEntity | null> {
    const result = phonesFixture.find((phone) => phone.name === name);
    return Promise.resolve(result ? result : null);
  }
  findOneAndUpdate(
    id: string,
    updatePhoneDto: UpdatePhoneDTO,
  ): Promise<PhoneEntity | null> {
    if (id !== phoneFixture.id) return Promise.resolve(null);
    return Promise.resolve(
      PhoneEntity.fromPrimitives({ ...updatePhoneDto, _id: phoneFixture.id }),
    );
  }

  async findOne(id: string): Promise<PhoneEntity | null> {
    if (id !== phoneFixture.id) return Promise.resolve(null);
    return Promise.resolve(phoneFixture);
  }

  async findAll(
    filters: PhoneFilters,
  ): Promise<PaginatedResponse<PhoneEntity[]>> {
    return Promise.resolve({
      data: [...phonesFixture],
      pagination: {
        offset: filters.offset,
        pageTake: filters.pageTake,
        total: phonesFixture.length,
      },
    });
  }
  async create(createPhoneDto: CreatePhoneDTO): Promise<PhoneEntity | null> {
    const result = PhoneEntity.fromPrimitives({
      ...createPhoneDto,
      _id: '1',
    });

    if (!result) Promise.resolve(null);

    return Promise.resolve(result);
  }

  async findOneAndDelete(id: string): Promise<true | null> {
    if (id !== phoneFixture.id) return Promise.resolve(null);
    return Promise.resolve(true);
  }
}
