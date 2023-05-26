import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'Please Enter Your Name' })
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Please Enter Valid Email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Please Enter The Password' })
  @IsNotEmpty()
  password: string;
}

export class ParamDto {
  @ApiProperty({ description: 'Please Enter User Id' })
  @IsString()
  id: number;
}
