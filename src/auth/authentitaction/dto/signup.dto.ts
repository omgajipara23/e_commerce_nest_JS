import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignupDto {
  @ApiPropertyOptional({ description: 'Please Enter The Name' })
  @IsOptional()
  name: string;

  @ApiProperty({ description: 'Please Enter The Email' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Please Enter The Password' })
  @IsNotEmpty()
  password: string;
}
