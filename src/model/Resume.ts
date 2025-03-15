import mongoose, { Document } from "mongoose";

export interface PersonalInfo {
  fullname: string;
  email: string;
  phone?: string;
  location?: { country: string; state: string };
  profileImage?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
  behance?: string;
  x?: string;
}

export interface Education {
  school: string;
  degree: string;
  yearCompleted: number;
}

export interface Position {
  title: string;
  startDate: Date;
  endDate?: Date;
  responsibilities: string[];
}

export interface Company {
  companyName: string;
  location?: string;
  positions: Position[];
}

type Step =
  | "personalInfos"
  | "experience"
  | "skills"
  | "summary"
  | "education"
  | "certification";

export interface ResumeBase {
  personalInfo: PersonalInfo;
  socialLinks: SocialLinks;
  languages: string[];
  skills: string[];
  education: Education[];
  experince: Company[];
  completedOnboardingSteps: Step[];
  user: mongoose.Types.ObjectId;
}

export interface ResumeProps extends ResumeBase, Document {}

const resumeSchema = new mongoose.Schema<ResumeProps>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    experince: [
      {
        companyName: { type: String, required: true },
        location: { type: String },
        positions: [
          {
            title: { type: String, required: true },
            startDate: { type: Date, required: true },
            endDate: { type: Date },
            responsibilities: [{ type: String }],
          },
        ],
      },
    ],

    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      portfolio: { type: String },
      behance: { type: String },
      x: { type: String },
    },
    languages: [{ type: String }],
    skills: [{ type: String }],
    personalInfo: {
      fullname: { type: String, required: true },
      email: { type: String },
      phone: { type: String },
      location: {
        country: { type: String },
        state: { type: String },
      },
      profileImage: { type: String },
    },
    education: [
      {
        school: { type: String },
        degree: { type: String },
        yearCompleted: { type: Number },
      },
    ],
    completedOnboardingSteps: [{ type: String }],
  },
  { timestamps: true }
);

const Resume = mongoose.model<ResumeProps>("Resume", resumeSchema);
export default Resume;
