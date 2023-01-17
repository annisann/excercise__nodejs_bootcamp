import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':username')
  async find(@Param('username') username: string) {
    return await this.userService.findBy(username);
  }

  @Post()
  async create(@Body() body: JSON) {
    return await this.userService.createNew(body);
  }
}
