import { HashingService } from '../hashing/hashing.service';
import { PrismaService } from './../../prisma_crud/prisma_crud.servise';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly hashingService: HashingService,
  ) {}
  async signup(signupDto: SignupDto) {
    return this.prismaService.user.create({
      data: {
        name: signupDto.name,
        email: signupDto.email,
        password: await this.hashingService.hash(signupDto.password),
      },
    });
  }

  async signin(signinDto: SigninDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: signinDto.email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('user Does Not Exist');
    }

    const isEqual = await this.hashingService.compare(
      signinDto.password,
      user.password,
    );

    if (!isEqual) {
      throw new UnauthorizedException('Invalid Email/Password');
    }
    return true;
  }
}
