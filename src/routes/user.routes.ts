import express from 'express';
import { userController } from '../infra/dependencyInjector/Injection';

const userRoutes = express.Router();

userRoutes.post("/", async (req, res) => {
  await userController.handle(req, res);
});

export default userRoutes;
