import { Request, Response, NextFunction } from "express";

export interface CustomError extends Error {
  statusCode?: number;
  errors?: { [key: string]: { message: string } };
}

export const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customError = {
    statusCode: err.statusCode || 500,
    message: err.message || "Something went wrong",
  };

  if (err.name === "ValidationError" && err.errors) {
    customError.statusCode = 400;
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }

  res.status(customError.statusCode).json({
    success: false,
    error: customError.message,
  });
};
