import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get('get')
  findAll() {
    return 'FindAll';
  }
}
