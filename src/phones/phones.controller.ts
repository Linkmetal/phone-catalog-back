import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { ApiNotFoundResponse, ApiResponse } from '@nestjs/swagger';
import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhoneDTO, PhoneIdQueryDTO } from './dtos/phone.dto';
import { PhonesService } from './phones.service';
import { UpdatePhoneDTO } from './dtos/update-phone.dto';
import { PhoneFilters } from './phones.repository';
import { FileInterceptor } from '@nestjs/platform-express';

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
  async getPhoneList(@Query() query: PhoneFilters) {
    const result = await this.phoneService.findAll(query);

    return {
      data: result.data.map((phone) => PhoneDTO.fromEntity(phone)),
      pagination: result.pagination,
    };
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
    status: HttpStatus.CREATED,
    description: 'Upload phone immge',
  })
  @Post(':id/image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPhoneImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const result = await this.phoneService.uploadImage(file, id);
    return result;
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

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Delete phone',
  })
  @Delete(':id')
  async deletePhone(@Param() params: PhoneIdQueryDTO) {
    const result = await this.phoneService.findOneAndDelete(params.id);

    return result;
  }
}
