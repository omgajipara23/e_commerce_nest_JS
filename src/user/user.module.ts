import { PrismaService } from './../prisma_crud/prisma_crud.servise';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
