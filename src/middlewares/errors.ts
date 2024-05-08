import { HttpException } from "../exceptions/root.js";
import { NextFunction, Request,Response } from "express";


export const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    message: error.message,
    error: error.errorCode,
    errors:error.error
  });
};
