import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './schema/users.schema';
import mongoose from 'mongoose';

export class UserService {
  constructor(
    @InjectModel(UserModel.name)
    private usermodel: mongoose.Model<UserModel>,
  ) {}
  async find(): Promise<UserModel[]> {
    const data = await this.usermodel.find();
    return data;
  }
}
