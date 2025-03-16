import { Router } from "express";
import {
  updateCertificationStep,
  updateEducationStep,
  updateExperienceStep,
  updatePersonalInfoStep,
  updateSkillsStep,
  updateSummaryStep,
} from "../controllers/onboardingNewResume";

const router = Router();

router.patch("/personal-info", updatePersonalInfoStep);
router.patch("/experience", updateExperienceStep);
router.patch("/skills", updateSkillsStep);
router.patch("/summary", updateSummaryStep);
router.patch("/education", updateEducationStep);
router.patch("/certification", updateCertificationStep);

export default router;
