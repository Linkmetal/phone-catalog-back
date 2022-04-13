import { CreatePhoneDTO } from './dtos/create-phone.dto';
import { PhoneCollectionName } from './schemas/phone.schema';
import {
  PhoneEntity,
  PhoneFilters,
  PhoneRepository,
} from './phones.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdatePhoneDTO } from './dtos/update-phone.dto';

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
  async findAll(filters: PhoneFilters) {
    const query = this.phoneModel.find();
    if (filters?.name) query.where('name').equals(filters?.name);
    if (filters?.ram) query.where('ram').equals(filters?.ram);
    if (filters?.manufacturer)
      query.where('manufacturer').equals(filters?.manufacturer);
    if (filters?.maxPrice && filters?.minPrice)
      query.where('price').gte(filters?.minPrice).lte(filters?.maxPrice);
    if (filters?.searchQuery)
      query.where('name').regex(`^${filters.searchQuery}`);

    const results = await query.exec();

    return results.map((p) =>
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

  async findOneByName(name: string): Promise<PhoneEntity | null> {
    const result = await this.phoneModel.findOne({ name: name }).exec();

    if (!result) return null;

    return PhoneEntity.fromPrimitives({
      ...result.toObject(),
      _id: result._id.toString(),
    });
  }
}
