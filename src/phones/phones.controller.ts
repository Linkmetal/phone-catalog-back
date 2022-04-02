import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { ApiNotFoundResponse, ApiResponse } from '@nestjs/swagger';
import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhoneDTO } from './dtos/phone.dto';
import { PhonesService } from './phones.service';
import { Response } from 'express';
import { UpdatePhoneDTO } from 'src/phones/dtos/update-phone.dto';

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
  async getPhoneDetails(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.phoneService.findOne(id);

    if (!result) {
      res.status(HttpStatus.NOT_FOUND);
      return null;
    }

    return PhoneDTO.fromEntity(result);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PhoneDTO,
    description: 'Create phone',
  })
  @Post('')
  async createPhone(@Body() body: CreatePhoneDTO, @Res() res: Response) {
    const result = await this.phoneService.create(body);

    if (!result) {
      res.status(HttpStatus.BAD_REQUEST);
      return res.json({ result: 'NOT CREATED' });
    }

    return res.json(PhoneDTO.fromEntity(result));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: PhoneDTO,
    description: 'Update phone',
  })
  @Put(':id')
  async updatePhone(
    @Body() body: UpdatePhoneDTO,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const result = await this.phoneService.findOneAndUpdate(id, body);

    if (!result) {
      res.status(HttpStatus.BAD_REQUEST);
      return res.json({ result: 'NOT UPDATED' });
    }

    return res.json(PhoneDTO.fromEntity(result));
  }
}
