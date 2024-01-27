import { User } from "../User";

export interface UserRepository {
  insert(user: User): Promise<void>;
  findAll(): Promise<Array<User>>;
}