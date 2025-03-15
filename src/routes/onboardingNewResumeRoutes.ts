import { Router } from "express";
import {
  updateExperienceStep,
  updatePersonalInfoStep,
} from "../controllers/onboardingNewResume";

const router = Router();

router.patch("/personal-info", updatePersonalInfoStep);
router.patch("/experience", updateExperienceStep);

export default router;
