import { UserDto } from './user.dto';
import { PrismaService } from './../prisma_crud/prisma_crud.servise';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async creatuser(userDto: UserDto) {
    return this.prismaService.user.create({
      data: userDto,
    });
  }

  async getUserPost(id: number) {
    return this.prismaService.user.findMany({
      where: {
        id: id,
      },
      include: {
        posts: true,
      },
    });
  }
}
