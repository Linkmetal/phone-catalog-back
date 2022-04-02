import { Expose, plainToClass } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';
import { PhoneEntity } from '../phones.repository';

export class PhoneDTO {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  manufacturer: string;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  color: string;

  @ApiProperty()
  @Expose()
  price: number;

  @ApiProperty()
  @Expose()
  imageFileName: string;

  @ApiProperty()
  @Expose()
  screen: string;

  @ApiProperty()
  @Expose()
  processor: string;

  @ApiProperty()
  @Expose()
  ram: string;

  static fromEntity(phone: PhoneEntity): PhoneDTO {
    return plainToClass(PhoneDTO, phone, {
      excludeExtraneousValues: true,
    });
  }
}
