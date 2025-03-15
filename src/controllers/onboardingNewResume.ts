import { Request, Response } from "express";
import Resume, {
  Company,
  PersonalInfo,
  ResumeBase,
  SocialLinks,
} from "../model/Resume";
import User from "../model/User";

type PersonalInfoProps = {
  personalInfo: PersonalInfo;
  socialLinks: SocialLinks;
};

const workExperience: Company = {
  companyName: "Tech Solutions Inc.",
  location: "San Francisco, CA",
  positions: [
    {
      title: "Software Engineer",
      startDate: new Date("2020-06-01"),
      endDate: new Date("2023-03-15"),
      responsibilities: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to deliver scalable solutions.",
        "Optimized database queries for improved performance.",
      ],
    },
    {
      title: "Junior Developer",
      startDate: new Date("2018-09-01"),
      endDate: new Date("2020-05-31"),
      responsibilities: [
        "Assisted in developing APIs with Express and MongoDB.",
        "Wrote unit tests to ensure code quality.",
        "Participated in Agile development sprints.",
      ],
    },
  ],
};

// 1. personal Info Step
export async function updatePersonalInfoStep(req: Request, res: Response) {
  const { step } = req.body;

  const userId = "67d3ea05c59e74f083e11408";

  let resume = await Resume.findOne({ user: userId });

  if (!resume) {
    resume = new Resume({ user: userId, completedOnboardingSteps: [] });
  }
  const personalInfo: PersonalInfoProps = {
    personalInfo: {
      email: "john.doe@example.com",
      location: { country: "USA", state: "California" },
      profileImage: "https://example.com/profile.jpg",
      fullname: "John Doe",
      phone: "+1 123-456-7890",
    },
    socialLinks: {
      behance: "https://www.behance.net/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
      portfolio: "https://johndoe.dev",
      x: "https://x.com/johndoe",
    },
  };

  resume.personalInfo = personalInfo.personalInfo;
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
  const {} = req.body;
  const userId = "67d3ea05c59e74f083e11408";

  let resume = await Resume.findOne({ user: userId });

  if (!resume) {
    resume = new Resume({ user: userId, completedOnboardingSteps: [] });
  }

  resume.experince = [workExperience];

  res.status(200).json({
    message: "Experience updated successfully",
    resume,
  });
}

export function skillsStep(req: Request, res: Response) {}
export function summaryStep(req: Request, res: Response) {}
export function educationStep(req: Request, res: Response) {}
export function certificationStep(req: Request, res: Response) {}
