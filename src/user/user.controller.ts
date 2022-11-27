import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto): Promise<UserDocument> {
    return this.userService.createUser(userDto);
  }

  @Get()
  async findUsers() {
    return this.userService.findAll();
  }
}
