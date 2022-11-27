import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
