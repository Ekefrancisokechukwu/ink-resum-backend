import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import { notFoundMiddleware } from "./middleware/notFoundMiddleware";
import { errorMiddleware } from "./middleware/errorMiddleware";

import authRouter from "./routes/authRoutes";
import onBoardingNewRouter from "./routes/onboardingNewResumeRoutes";

// Load environment variables
config();

const app: Express = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({ origin: "*" })); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get("/api/v1", (req, res) => {
  res.json({ message: "Welcome to the node mongoDB typescript API" });
});

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/onboarding", onBoardingNewRouter);

// Error handling
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
