import { IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePhoneDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  imageFileName: string;

  @ApiProperty()
  @IsString()
  screen: string;

  @ApiProperty()
  @IsString()
  processor: string;

  @ApiProperty()
  @IsString()
  ram: string;
}
