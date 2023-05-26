import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { BycryptService } from './hashing/bcrypt.service';
import { AuthentitactionController } from './authentitaction/authentitaction.controller';
import { AuthenticationService } from './authentitaction/authentication.service';
import { PrismaService } from 'src/prisma_crud/prisma_crud.servise';

@Module({
  providers: [
    {
      provide: HashingService,
      useClass: BycryptService,
    },
    AuthenticationService,
    PrismaService,
  ],
  controllers: [AuthentitactionController],
})
export class AuthModule {}
