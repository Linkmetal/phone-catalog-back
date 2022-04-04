import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApiNotFoundResponse, ApiResponse } from '@nestjs/swagger';
import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhoneDTO, PhoneIdQueryDTO } from './dtos/phone.dto';
import { PhonesService } from './phones.service';
import { UpdatePhoneDTO } from './dtos/update-phone.dto';

@Controller('/api/v1/phones')
export class PhonesController {
  constructor(private phoneService: PhonesService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    type: PhoneDTO,
    isArray: true,
    description: 'List of phones',
  })
  @Get()
  async getPhoneList() {
    return (await this.phoneService.findAll()).map((phone) =>
      PhoneDTO.fromEntity(phone),
    );
  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: PhoneDTO,
    isArray: false,
    description: 'Phones detail',
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'NOT FOUND',
  })
  @Get(':id')
  async getPhoneDetails(@Param() params: PhoneIdQueryDTO) {
    const result = await this.phoneService.findOne(params.id);

    return PhoneDTO.fromEntity(result);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PhoneDTO,
    description: 'Create phone',
  })
  @Post('')
  async createPhone(@Body() body: CreatePhoneDTO) {
    const result = await this.phoneService.create(body);

    return PhoneDTO.fromEntity(result);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: PhoneDTO,
    description: 'Update phone',
  })
  @Put(':id')
  async updatePhone(
    @Param() params: PhoneIdQueryDTO,
    @Body() body: UpdatePhoneDTO,
  ) {
    const result = await this.phoneService.findOneAndUpdate(params.id, body);

    return PhoneDTO.fromEntity(result);
  }
}
