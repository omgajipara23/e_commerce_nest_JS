import { Injectable, Controller } from '@nestjs/common';
import { PrismaService } from 'src/prisma_crud/prisma_crud.servise';
import { PostDto } from './post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async createPost(postDto: PostDto) {
    return this.prismaService.post.create({
      data: {
        title: postDto.title,
        discription: postDto.discription,
        authour_id: +postDto.author_id,
      },
    });
  }
}
