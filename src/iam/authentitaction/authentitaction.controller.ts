import { AuthenticationService } from './authentication.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

@ApiTags('Authentication Module')
@Controller('authentitaction')
export class AuthentitactionController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('/sign_up')
  signup(@Body() signupDto: SignupDto) {
    return this.authenticationService.signup(signupDto);
  }

  @Post('/sign_in')
  signin(@Body() signinDto: SigninDto) {
    return this.authenticationService.signin(signinDto);
  }
}
