import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class PostDto {
  @ApiProperty({ description: 'Please Enter TItle' })
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Please Enter Description' })
  @IsString()
  discription?: string;

  @ApiPropertyOptional({ description: 'Please Enter Description' })
  @IsString()
  author_id: number;
}
