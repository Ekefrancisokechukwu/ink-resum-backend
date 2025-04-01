import { Router } from "express";
import {
  handleAuthLogin,
  handleAuthSignup,
} from "../controllers/authController";
// import { handleAuth } from "../controllers/authController";

const router = Router();

router.post("/signup", handleAuthSignup);
router.post("/login", handleAuthLogin);

export default router;
