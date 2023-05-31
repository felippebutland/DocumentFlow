import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  emailAddress: string;

  @Prop()
  notification: boolean;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
