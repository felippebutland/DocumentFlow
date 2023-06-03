import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, Types } from 'mongoose';

@Schema()
export class Logger extends Document {
  @Prop()
  action: string;

  @Prop({ type: Types.ObjectId })
  user: ObjectId;

  @Prop()
  ip: string;

  @Prop()
  oldRecord: string;

  @Prop({ type: Object })
  // eslint-disable-next-line @typescript-eslint/ban-types
  newRecord: Object;

  @Prop()
  created_at: Date;
}

export const LoggerSchema = SchemaFactory.createForClass(Logger);
