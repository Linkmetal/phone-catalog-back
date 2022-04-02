import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { Inject, Injectable } from '@nestjs/common';
import {
  PhoneEntity,
  PhoneRepository,
  PHONE_REPOSITORY_TOKEN,
} from './phones.repository';

@Injectable()
export class PhonesService {
  constructor(
    @Inject(PHONE_REPOSITORY_TOKEN) private phoneRepository: PhoneRepository,
  ) {}

  async create(createPhoneDto: CreatePhoneDTO): Promise<PhoneEntity> {
    // const duplicatedEntry = this.phoneRepository.findOne({name: createPhoneDto.name})

    return await this.phoneRepository.create(createPhoneDto);
  }

  findAll() {
    return this.phoneRepository.findAll();
  }
}
