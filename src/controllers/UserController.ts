import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async handle(req: Request, res: Response) {
    const { name, email, password, document } = req.body;

    const user = {
      name,
      email,
      password,
      document,
    }

    const result = await this.userService.createUser(user);
    return res.status(201).json(result);
  }
}
