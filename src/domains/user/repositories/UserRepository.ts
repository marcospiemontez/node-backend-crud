import { UserEntity } from '../entities/UserEntity';

export class UserRepository {
  private users: Array<UserEntity>;

  constructor() {
    this.users = [];
  }

  insert(user: UserEntity): void {
    this.users.push(user);
  }

  getUserByEmail(email: string): UserEntity | undefined {
    return this.users.find(user => user.getEmail() === email);
  }

  getAllUsers(): UserEntity[] {
    return this.users;
  }
}
