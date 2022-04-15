import { CreatePhoneDTO } from './dtos/create-phone.dto';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import {
  PhoneEntity,
  PhoneFilters,
  PhoneRepository,
  PHONE_REPOSITORY_TOKEN,
} from './phones.repository';
import { UpdatePhoneDTO } from './dtos/update-phone.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class PhonesService {
  constructor(
    @Inject(PHONE_REPOSITORY_TOKEN) private phoneRepository: PhoneRepository,
    private cloudinary: CloudinaryService,
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

  async findOneAndDelete(id: string): Promise<true | null> {
    const result = await this.phoneRepository.findOneAndDelete(id);

    if (!result)
      throw new HttpException(
        'Error while deleting phone',
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

  async findAll(filters?: PhoneFilters) {
    return await this.phoneRepository.findAll(filters);
  }

  async uploadImage(file: Express.Multer.File, id: string) {
    const phone = await this.findOne(id);
    if (!phone)
      throw new HttpException(
        `Phone with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );

    const result = await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Error while uploading image');
    });

    return await this.findOneAndUpdate(id, {
      ...phone,
      imageFileName: result.secure_url,
    });
  }
}
