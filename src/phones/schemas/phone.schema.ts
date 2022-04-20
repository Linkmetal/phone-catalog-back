import { PhoneEntity } from '../phones.repository';
import { Schema } from 'mongoose';

export const Phone = {
  name: String,

  manufacturer: String,

  description: String,

  color: String,

  price: Number,

  imageSrc: String,

  screen: String,

  processor: String,

  ram: String,
};

export const PhoneSchema = new Schema<PhoneEntity>(Phone);
export const PhoneCollectionName = 'phones';
