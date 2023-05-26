import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Nest Prisma example')
    .setDescription('This Is Simple Prisma CRUD Example')
    .setVersion('1.0')
    .addTag('Nest Prisma')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
