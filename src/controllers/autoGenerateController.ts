import { Request, Response } from "express";

interface ResponseBody {
  userId: string;
  jobDescription: string;
}

export async function autoGenerateResume(req: Request, res: Response) {
  const { userId, jobDescription } = req.body;
}
