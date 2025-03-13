import mongoose, { Date, Document } from "mongoose";

interface PersonalInfo {
  name: string;
  email: string;
  phone?: string;
  location?: string;
}

interface SocialLinks {
  github: string;
  linkedin: string;
  portfolio: string;
  behance: string;
  x: string;
}

interface Education {
  school: string;
  degree: string;
  yearCompleted: number;
}

interface Position {
  title: string;
  startDate: Date;
  endDate?: Date;
  responsibilities: string[];
}

interface Company {
  name: string;
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

interface ResumeProps extends Document {
  personalInfo: PersonalInfo;
  socialLinks: SocialLinks;
  languages: string[];
  skills: string[];
  education: Education;
  experince: Company;
  completedSteps: Step[];
}

const resumeSchema = new mongoose.Schema<ResumeProps>(
  {
    experince: {
      name: { type: String, required: true },
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
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String },
      location: { type: String },
    },
    completedSteps: [{ type: String }],
  },
  { timestamps: true }
);

const Resume = mongoose.model<ResumeProps>("Resume", resumeSchema);
export default Resume;
