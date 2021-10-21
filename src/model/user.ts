import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  score: number;
}

const schema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model<User>('User', schema);
export default UserModel;
