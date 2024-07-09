import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, userSchema } from './schema/users.schema';
// import { UserModel } from './schema/users.schema';

@Module({})
export class UserModule {
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: userSchema }]),
    // forFeature([{ name: UserModel['name'], schema: userSchema }])];
  controller: [UserController];
  provider: [UserService];
  exports: [UserModel];
}
