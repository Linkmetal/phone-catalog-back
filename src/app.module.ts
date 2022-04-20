import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonesModule } from './phones/phones.module';
import config from './config';

const dbConnectionUri = `${config.db.mongodb.protocol}${config.db.mongodb.user}:${config.db.mongodb.password}@${config.db.mongodb.host}${config.db.mongodb.name}`;

@Module({
  imports: [MongooseModule.forRoot(dbConnectionUri), PhonesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
