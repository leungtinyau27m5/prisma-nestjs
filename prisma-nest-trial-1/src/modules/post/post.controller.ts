import { Controller, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('api/v1/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Delete('post/:id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost({ id: Number(id) });
  }
}
