import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhoneCollectionName } from './schemas/phone.schema';
import { PhoneEntity, PhoneRepository } from './phones.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class PhoneRepositoryMongoDB implements PhoneRepository {
  constructor(
    @InjectModel(PhoneCollectionName) private phoneModel: Model<PhoneEntity>,
  ) {}

  async findAll() {
    return (await this.phoneModel.find().exec()).map((p) =>
      PhoneEntity.fromPrimitives({ ...p.toObject(), _id: p._id.toString() }),
    );
  }
  async create(createPhoneDto: CreatePhoneDTO) {
    const result = await this.phoneModel.create(createPhoneDto);
    return PhoneEntity.fromPrimitives({
      ...result.toObject(),
      _id: result._id.toString(),
    });
  }
}
