import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaService } from 'src/prisma_crud/prisma_crud.servise';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {}
