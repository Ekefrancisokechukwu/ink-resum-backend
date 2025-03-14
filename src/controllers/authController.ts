import { Request, Response } from "express";
import User from "../model/User";

export async function handleAuth(req: Request, res: Response) {
  const user = {
    userId: `userId-${Math.random() * 230}`,
    name: "John Doe",
    email: "johntest@gmail.com",
  };

  await User.create(user);
  res.status(201).json({ message: "User created " });
}
