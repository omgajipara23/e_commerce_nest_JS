import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SigninDto {
  @ApiProperty({ description: 'Please Enter The Email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Please Enter The Password' })
  @IsNotEmpty()
  password: string;
}
