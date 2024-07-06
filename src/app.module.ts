import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UserController } from './users/user.controller';

@Module({
  imports: [UsersModule],
  controllers: [UserController],
  // providers: [UserSer],
})
export class AppModule {}
