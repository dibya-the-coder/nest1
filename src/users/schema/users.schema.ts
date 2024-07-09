import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

// export type UserDocument = UserModel & Document;

@Schema()
export class UserModel extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const userSchema = SchemaFactory.createForClass(UserModel);
