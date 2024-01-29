import "express-async-errors"
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../errors/AppError';

const loggerMiddleware = (err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  const method = request.method;
  const path = request.path;

  const startTime = Date.now();

  response.on('finish', () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    const statusCode = response.statusCode;

    console.log(`[INFO] ${method} ${path} - Status: ${statusCode} - Response Time: ${responseTime}ms`);
  });

  next();
};

export default loggerMiddleware;
