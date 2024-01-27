import { Request, Response } from "express";
import { UserRepository } from "../model/repository/UserRepository";

export class UserList {

  constructor(readonly repository: UserRepository) {}

  async execute(req: Request, res: Response) {
    const userCollection = await this.repository.findAll()

    res.status(200).json({userCollection});
  }
}