import { UserRepository } from "../../../model/repository/UserRepository";
import { User } from "../../../model/User";

export class UserRepositoryInMemory implements UserRepository {

  private userCollection: Array<User>;


  constructor() {
    this.userCollection = [];
  }

  async insert(user: User): Promise<void> {
    this.userCollection.push(user);
  }

  async findAll(): Promise<User[]> {
    return this.userCollection;
  }
}