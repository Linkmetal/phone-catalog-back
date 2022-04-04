import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonesModule } from './phones/phones.module';
import config from './config';

const dbConnectionUri = `mongodb+srv://${config.db.mongodb.user}:${config.db.mongodb.password}${config.db.mongodb.host}`;

@Module({
  imports: [MongooseModule.forRoot(dbConnectionUri), PhonesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
