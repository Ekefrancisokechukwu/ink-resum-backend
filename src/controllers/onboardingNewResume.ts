import { Request, Response } from "express";
import Resume, {
  Company,
  PersonalInfo,
  ResumeBase,
  SocialLinks,
} from "../model/Resume";
import User from "../model/User";

// 1. personal Info Step
export async function updatePersonalInfoStep(req: Request, res: Response) {
  const { personalInfos, socialLinks } = req.body;

  const userId = "67d3ea05c59e74f083e11408";

  let resume = await Resume.findOne({ user: userId });

  if (!resume) {
    resume = new Resume({ user: userId, completedOnboardingSteps: [] });
  }

  const personalInfo = {
    personalInfos,
    socialLinks,
  };

  resume.personalInfo = personalInfo.personalInfos;
  resume.socialLinks = personalInfo.socialLinks;

  if (!resume.completedOnboardingSteps.includes("personalInfos")) {
    resume.completedOnboardingSteps.push("personalInfos");
  }

  await resume.save();

  res.status(200).json({
    message: "Personal information updated successfully",
    resume,
  });
}

// 2 update experience step
export async function updateExperienceStep(req: Request, res: Response) {
  const { experience } = req.body;
  const userId = "67d3ea05c59e74f083e11408";

  // TODO:: check if user with id exists

  let resume = await Resume.findOne({ user: userId });

  if (!resume) {
    resume = new Resume({ user: userId, completedOnboardingSteps: [] });
  }

  resume.experince = experience;

  if (!resume.completedOnboardingSteps.includes("experience")) {
    resume.completedOnboardingSteps.push("experience");
  }

  await resume.save();

  res.status(200).json({
    message: "Experience updated successfully",
    resume,
  });
}

// 3. update skills
export async function updateSkillsStep(req: Request, res: Response) {
  const { skills } = req.body;
  const user = "67d3ea05c59e74f083e11408";

  // TODO:: check if user with id exists
  let resume = await Resume.findOne({ user });

  if (!resume) {
    resume = new Resume({ user, completedOnboardingSteps: [] });
  }

  resume.skills = skills;

  if (!resume.completedOnboardingSteps.includes("skills")) {
    resume.completedOnboardingSteps.push("skills");
  }

  await resume.save();

  res.status(200).json({
    message: "Skills updated successfully",
    resume,
  });
}

// 4. update summary
export async function updateSummaryStep(req: Request, res: Response) {
  const { summary } = req.body;
  const user = "67d3ea05c59e74f083e11408";

  // TODO:: check if user with id exists
  let resume = await Resume.findOne({ user });

  if (!resume) {
    resume = new Resume({ user, completedOnboardingSteps: [] });
  }

  resume.summary = summary;

  if (!resume.completedOnboardingSteps.includes("summary")) {
    resume.completedOnboardingSteps.push("summary");
  }

  await resume.save();

  res.status(200).json({
    message: "Summary updated successfully",
    resume,
  });
}

// 5 educationStep
export async function updateEducationStep(req: Request, res: Response) {
  const { education } = req.body;
  const user = "67d3ea05c59e74f083e11408";

  // TODO:: check if user with id exists
  let resume = await Resume.findOne({ user });

  if (!resume) {
    resume = new Resume({ user, completedOnboardingSteps: [] });
  }

  resume.education = education;
  if (!resume.completedOnboardingSteps.includes("education")) {
    resume.completedOnboardingSteps.push("education");
  }

  await resume.save();

  res.status(200).json({
    message: "Education updated successfully",
    resume,
  });
}

export async function updateCertificationStep(req: Request, res: Response) {
  const { certifications } = req.body;
  const user = "67d3ea05c59e74f083e11408";

  // TODO:: check if user with id exists
  let resume = await Resume.findOne({ user });

  if (!resume) {
    resume = new Resume({ user, completedOnboardingSteps: [] });
  }

  resume.certification = certifications;
  if (!resume.completedOnboardingSteps.includes("certification")) {
    resume.completedOnboardingSteps.push("certification");
  }

  await resume.save();

  res.status(200).json({
    message: "Education updated successfully",
    resume,
  });
}
