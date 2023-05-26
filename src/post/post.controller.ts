import { PostDto } from './post.dto';
import { PostService } from './post.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/create_post')
  createPost(@Body() postDto: PostDto) {
    return this.postService.createPost(postDto);
  }
}
