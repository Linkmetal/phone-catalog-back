import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { Inject, Injectable } from '@nestjs/common';
import {
  PhoneEntity,
  PhoneRepository,
  PHONE_REPOSITORY_TOKEN,
} from './phones.repository';
import { UpdatePhoneDTO } from 'src/phones/dtos/update-phone.dto';

@Injectable()
export class PhonesService {
  constructor(
    @Inject(PHONE_REPOSITORY_TOKEN) private phoneRepository: PhoneRepository,
  ) {}

  async findOne(id: string): Promise<PhoneEntity | null> {
    return await this.phoneRepository.findOne(id);
  }

  async findOneAndUpdate(
    id: string,
    update: UpdatePhoneDTO,
  ): Promise<PhoneEntity | null> {
    return await this.phoneRepository.findOneAndUpdate(id, update);
  }

  async create(createPhoneDto: CreatePhoneDTO): Promise<PhoneEntity | null> {
    const duplicatedEntry = await this.phoneRepository.findOne(
      createPhoneDto.name,
    );

    if (duplicatedEntry) return null;

    return await this.phoneRepository.create(createPhoneDto);
  }

  findAll() {
    return this.phoneRepository.findAll();
  }
}
