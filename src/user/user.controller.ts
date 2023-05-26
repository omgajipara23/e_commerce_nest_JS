import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ParamDto, UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create_user')
  createNewUser(@Body() userDto: UserDto) {
    try {
      return this.userService.creatuser(userDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('/get_user_posts')
  getUserPost(@Query() user: ParamDto) {
    return this.userService.getUserPost(+user.id);
  }
}
