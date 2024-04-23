import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Transfer extends Document {
  @Prop({ required: false })
  transferId: string;

  @Prop({ required: true })
  sender: string;

  @Prop({ required: true })
  receiver: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true, default: Date.now })
  transactionDate: Date;

  createdAt?: Date;
}

export const TransferSchema = SchemaFactory.createForClass(Transfer);
