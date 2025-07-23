import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.usersService.createUser(username, password);
  }

  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User | null> {
    return this.usersService.findOne(username);
  }
}
