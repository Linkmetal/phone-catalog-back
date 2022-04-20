import { PhoneCollectionName, PhoneSchema } from './schemas/phone.schema';

import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PHONE_REPOSITORY_TOKEN } from './phones.repository';
import { PhoneRepositoryMongoDB } from './phones.repository.mongodb';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PhoneCollectionName, schema: PhoneSchema },
    ]),
    CloudinaryModule,
  ],
  controllers: [PhonesController],
  providers: [
    PhonesService,
    {
      provide: PHONE_REPOSITORY_TOKEN,
      useClass: PhoneRepositoryMongoDB,
    },
  ],
})
export class PhonesModule {}
