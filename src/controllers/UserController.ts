import { Request, Response } from 'express';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserService } from '../domains/user/services/UserService';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  createUser(req: Request, res: Response): void {
    const createUserDTO: CreateUserDTO = req.body;
    const newUser = this.userService.createUser(createUserDTO);

    res.json(newUser);
  }
}