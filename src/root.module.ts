import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { IamModule } from './iam/iam.module';

@Module({
  imports: [UserModule, PostModule, IamModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module!!!');
  }
}
