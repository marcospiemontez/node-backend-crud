import { Request, Response } from "express";
import { UserRepository } from "../model/repository/UserRepository";
import { User } from "../model/User";

export class UserCreate {

  constructor(readonly repository: UserRepository) {

  }

  async execute(req: Request, res: Response) {
    const { name, email, document, password } = req.body;
    const user = User.create(name, email, document, password);
    
    await this.repository.insert(user);

    res.status(201).json({user});
  }
}