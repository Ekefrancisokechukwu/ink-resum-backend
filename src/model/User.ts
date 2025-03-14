import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  userId: string;
  name: string;
  email: string;
  profilePicture: string;
}

const UserSchema = new Schema<IUser>({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: { type: String },
});

export default mongoose.model<IUser>("User", UserSchema);
