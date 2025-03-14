import { Router } from "express";
import { handleAuth } from "../controllers/authController";

const router = Router();

router.post("/login", handleAuth);

export default router;
