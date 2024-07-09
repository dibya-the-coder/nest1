import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserModel } from './users/schema/users.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env',
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/task'),
    UserModule,
    // UserModel,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
