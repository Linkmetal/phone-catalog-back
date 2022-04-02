import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhoneCollectionName } from './schemas/phone.schema';
import { PhoneEntity, PhoneRepository } from './phones.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdatePhoneDTO } from 'src/phones/dtos/update-phone.dto';

export class PhoneRepositoryMongoDB implements PhoneRepository {
  constructor(
    @InjectModel(PhoneCollectionName) private phoneModel: Model<PhoneEntity>,
  ) {}

  async findOneAndUpdate(
    id: string,
    updatePhoneDto: UpdatePhoneDTO,
  ): Promise<PhoneEntity | null> {
    const result = await this.phoneModel.findOneAndUpdate(
      { _id: id },
      updatePhoneDto,
      { returnDocument: 'after' },
    );

    if (!result) return null;

    return result;
  }

  async create(createPhoneDto: CreatePhoneDTO) {
    const result = await this.phoneModel.create(createPhoneDto);

    return PhoneEntity.fromPrimitives({
      ...result.toObject(),
      _id: result._id.toString(),
    });
  }
  async findAll() {
    return (await this.phoneModel.find().exec()).map((p) =>
      PhoneEntity.fromPrimitives({ ...p.toObject(), _id: p._id.toString() }),
    );
  }

  async findOne(id: string): Promise<PhoneEntity | null> {
    const result = await this.phoneModel.findOne({ _id: id }).exec();

    if (!result) return null;

    return PhoneEntity.fromPrimitives({
      ...result.toObject(),
      _id: result._id.toString(),
    });
  }
}
