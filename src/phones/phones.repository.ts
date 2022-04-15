import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { UpdatePhoneDTO } from './dtos/update-phone.dto';

export class PhoneEntity {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly manufacturer: string,
    readonly description: string,
    readonly color: string,
    readonly price: number,
    readonly imageFileName: string,
    readonly screen: string,
    readonly processor: string,
    readonly ram: string,
  ) {}

  static fromPrimitives(p: {
    _id: string;
    name: string;
    manufacturer: string;
    description: string;
    color: string;
    price: number;
    imageFileName: string;
    screen: string;
    processor: string;
    ram: string;
  }) {
    return new PhoneEntity(
      p._id,
      p.name,
      p.manufacturer,
      p.description,
      p.color,
      p.price,
      p.imageFileName,
      p.screen,
      p.processor,
      p.ram,
    );
  }
}

export type PhoneFilters = {
  searchQuery?: string;
  name?: string;
  manufacturer?: string;
  minPrice?: number;
  maxPrice?: number;
  ram?: string;
};

export interface PhoneRepository {
  create(createPhoneDto: CreatePhoneDTO): Promise<PhoneEntity>;
  findAll(filters?: PhoneFilters): Promise<PhoneEntity[]>;
  findOne(id: string): Promise<PhoneEntity | null>;
  findOneByName(name: string): Promise<PhoneEntity | null>;
  findOneAndUpdate(
    id: string,
    updatePhoneDto: UpdatePhoneDTO,
  ): Promise<PhoneEntity | null>;
  findOneAndDelete(id: string): Promise<true | null>;
}

export const PHONE_REPOSITORY_TOKEN = 'PhoneRepository';
