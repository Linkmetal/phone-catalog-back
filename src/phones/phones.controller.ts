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

import {
  ApiBody,
  ApiNotFoundResponse,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
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
  @ApiParam({
    name: 'searchQuery',
    description: 'String to search by phone name',
    required: false,
  })
  @ApiParam({
    name: 'manufacturer',
    description: 'Manufacturer to filter by',
    enum: ['Apple', 'Xiaomi', 'Samsung'],
    allowEmptyValue: true,
    required: false,
  })
  @ApiParam({
    name: 'ram',
    description: 'Ram to filter by',
    enum: ['2 GB', '3 GB', '4 GB', '5 GB', '6 GB'],
    allowEmptyValue: true,
    required: false,
  })
  @ApiParam({
    name: 'minPrice',
    description: 'Minimum price range to filter by',
    required: false,
    type: 'number',
  })
  @ApiParam({
    name: 'maxPrice',
    description: 'Maxmimum price range to filter by',
    required: false,
    type: 'number',
  })
  @ApiParam({
    name: 'pageTake',
    description: 'Set the limit of the returned query',
    type: 'number',
  })
  @ApiParam({
    name: 'offset',
    description: 'Offset for the results pagination',
    type: 'number',
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
  @ApiBody({
    type: CreatePhoneDTO,
  })
  @Post('')
  async createPhone(@Body() body: CreatePhoneDTO) {
    const result = await this.phoneService.create(body);

    return PhoneDTO.fromEntity(result);
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    type: PhoneDTO,
    description: 'Upload phone image',
  })
  @ApiBody({
    description: 'Image to upload',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
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
  @ApiBody({
    type: UpdatePhoneDTO,
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
