import { Body, Controller, Get, Post } from '@nestjs/common';

import { ApiResponse } from '@nestjs/swagger';
import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhoneDTO } from './dtos/phone.dto';
import { PhonesService } from './phones.service';

@Controller('/api/v1/phones')
export class PhonesController {
  constructor(private phoneService: PhonesService) {}

  @ApiResponse({
    status: 200,
    type: PhoneDTO,
    isArray: true,
    description: 'List of phones',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async findAll() {
    return (await this.phoneService.findAll()).map((phone) =>
      PhoneDTO.fromEntity(phone),
    );
  }

  @ApiResponse({
    status: 200,
    type: PhoneDTO,
    description: 'Create phone',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('')
  async createPhone(@Body() body: CreatePhoneDTO) {
    const result = await this.phoneService.create(body);
    return PhoneDTO.fromEntity(result);
  }
}
