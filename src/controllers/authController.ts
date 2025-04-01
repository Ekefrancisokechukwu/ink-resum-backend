import { Request, Response } from "express";
import User from "../model/User";
import BadRequestError from "../errors/badRequestError";
import NotFoundError from "../errors/notfoundError";
import { attachcookiesToResponse } from "../libs/jwt";

// export async function handleAuth(req: Request, res: Response) {
//   const user = {
//     userId: `userId-${Math.random() * 230}`,
//     name: "Mark Doe",
//     email: "johntfest@gmail.com",
//   };

//   await User.create(user);
//   res.status(201).json({ message: "User created " });
// }

export async function handleAuthSignup(req: Request, res: Response) {
  const { email, password, fullname } = req.body;

  if (!email || !password || !fullname) {
    throw new BadRequestError("Please Provide all values");
  }

  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new BadRequestError("Email already exists");
  }

  const user = await User.create({ email, password, fullname });

  res.status(201).json({ message: "Register sucessfully", user });
}

export async function login(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new NotFoundError("No user found!");
  }

  const passwordMatch = await user.comparePassword(password);

  if (!passwordMatch) {
    throw new BadRequestError("Invalid Password");
  }

  attachcookiesToResponse(res, {
    email: user.email,
    id: user._id,
    username: user.fullname,
  });

  res.status(200).json({ message: "Login sucessfully", user });
}

export async function logout(req: Request, res: Response) {
  res.status(200).json({ message: "Logout sucessfully" });
}
