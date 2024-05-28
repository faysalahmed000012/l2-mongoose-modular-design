import { NextFunction, Request, Response } from 'express';

export default function globalErrorhandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let statusCode = 500;
  let message = 'something went wrong, please try again later';
  return res.status(statusCode).json({
    success: false,
    message: err.message || message,
    error: err,
  });
}
