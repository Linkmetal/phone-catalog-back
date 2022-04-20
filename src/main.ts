import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

const allowedDomains = [
  'https://phone-catalog.linkmetal.dev',
  'https://phone-catalog-front.herokuapp.com/',
  'http://localhost:3000',
];

const options = {
  origin: function (
    origin: string,
    cb: (error: Error | null, origin?: string) => void,
  ) {
    if (allowedDomains.includes(origin)) {
      cb(null, origin);
    } else {
      cb(Error('invalid origin'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(options);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Phone Catalog API')
    .setDescription('REST API for consuming a phone catalog')
    .setVersion('1.0')
    .addTag('phone')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
