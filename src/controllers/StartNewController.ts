import { Request, Response } from "express";
import Resume from "model/Resume";

// 1. personal Info Step
export async function personalInfoStep(req: Request, res: Response) {
  const { data, step } = req.body;

  // await Resume.;
}

export function experinceStep(req: Request, res: Response) {}
export function skillsStep(req: Request, res: Response) {}
export function summaryStep(req: Request, res: Response) {}
export function educationStep(req: Request, res: Response) {}
export function certificationStep(req: Request, res: Response) {}
