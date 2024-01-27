import { Request, Response, Router } from "express";
import { UserRepositoryInMemory } from "./infra/repository/memory/UserRepositoryIInMemoery";
import { UserCreate } from "./controller/UserCreate";
import { UserList } from "./controller/UserList";

const router = Router();
const repository = new UserRepositoryInMemory();
const userCreate = new UserCreate(repository);
const userList = new UserList(repository);

router.post("/user", (req: Request, res: Response) => {
  userCreate.execute(req, res);
})

router.get("/users/findAll", (req: Request, res: Response) => {
  userList.execute(req, res);
})

export { router };
