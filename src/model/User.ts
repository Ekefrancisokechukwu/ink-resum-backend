import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";
import bycrypt from "bcryptjs";

export interface IUser extends Document {
  userId?: string;
  fullname: string;
  email: string;
  password: string;
  profilePicture?: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email: string) => validator.isEmail(email),
      message: "Please provide valid email",
    },
  },
  profilePicture: { type: String, default: null },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("passowrd")) {
    next();
  }

  const salt = await bycrypt.genSalt(12);
  this.password = await bycrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const isMatch = await bycrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model<IUser>("User", userSchema);
