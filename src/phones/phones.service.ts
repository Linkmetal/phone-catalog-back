import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import {
  PhoneEntity,
  PhoneRepository,
  PHONE_REPOSITORY_TOKEN,
} from './phones.repository';
import { UpdatePhoneDTO } from './dtos/update-phone.dto';

@Injectable()
export class PhonesService {
  constructor(
    @Inject(PHONE_REPOSITORY_TOKEN) private phoneRepository: PhoneRepository,
  ) {}

  async findOne(id: string): Promise<PhoneEntity> {
    const result = await this.phoneRepository.findOne(id);

    if (!result) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return result;
  }

  async findOneByName(name: string): Promise<PhoneEntity | null> {
    return await this.phoneRepository.findOneByName(name);
  }

  async findOneAndUpdate(
    id: string,
    update: UpdatePhoneDTO,
  ): Promise<PhoneEntity> {
    const result = await this.phoneRepository.findOneAndUpdate(id, update);

    if (!result)
      throw new HttpException(
        'Error while updating phone',
        HttpStatus.NOT_FOUND,
      );

    return result;
  }

  async create(createPhoneDto: CreatePhoneDTO): Promise<PhoneEntity> {
    const duplicatedEntry = await this.findOneByName(createPhoneDto.name);

    if (duplicatedEntry)
      throw new HttpException(
        `A phone with name ${createPhoneDto.name} already exists`,
        HttpStatus.BAD_REQUEST,
      );

    const result = await this.phoneRepository.create(createPhoneDto);
    if (!result)
      throw new HttpException(
        'Error while insterting new phone',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    return result;
  }

  findAll() {
    return this.phoneRepository.findAll();
  }
}
