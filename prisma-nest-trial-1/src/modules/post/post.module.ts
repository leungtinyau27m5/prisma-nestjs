import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaService } from '../services/prisma/prisma.service';
import { PostController } from './post.controller';

@Module({
  imports: [],
  providers: [PostService, PrismaService],
  controllers: [PostController],
  exports: [PostService],
})
export class PostModule {}
