import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModel } from './schema/users.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('get')
  findAll(): Promise<UserModel[]> {
    return this.userService.find();
  }
}
