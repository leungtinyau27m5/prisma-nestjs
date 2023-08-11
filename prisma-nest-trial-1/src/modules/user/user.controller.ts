import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(@Body() userData: { name?: string; email: string }) {
    return this.userService.createUser(userData);
  }
}
