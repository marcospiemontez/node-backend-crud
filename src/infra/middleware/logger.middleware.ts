import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const method = req.method;
  const path = req.path;

  const startTime = Date.now();

  res.on('finish', () => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    const statusCode = res.statusCode;

    console.log(`[INFO] ${method} ${path} - Status: ${statusCode} - Response Time: ${responseTime}ms`);
  });

  next();
};

export default loggerMiddleware;
