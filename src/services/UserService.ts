import { UserDTO } from '../dtos/UserDTO';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user: UserDTO) {

    const userModel = await this.userRepository.createUser(user);

    return userModel;
  }
}
