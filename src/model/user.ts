import { Schema, model } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  password: string;
  score: number;
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model<User>('User', schema);
module.exports = UserModel;
