import express from 'express';
import { userController } from '../infra/dependencyInjector/Injection';
import { Request, Response } from 'express';

const userRoutes = express.Router();

userRoutes.post("/", async (req: Request, res: Response) => {
  userController.createUser(req, res);
});

export default userRoutes;
