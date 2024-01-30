import { UserRepository } from '../repositories/UserRepository';
import { UserEntity } from '../entities/UserEntity';
import { CreateUserDTO } from '../../../dtos/CreateUserDTO';

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  createUser(createUserDTO: CreateUserDTO): UserEntity {
    const newUser = new UserEntity(
      Math.random(),
      createUserDTO.getName(),
      createUserDTO.getEmail(),
      createUserDTO.getDocument(),
      createUserDTO.getPassword()
    );

    this.userRepository.insert(newUser);
    return newUser;
  }

  getUserByEmail(email: string): UserEntity | undefined {
    return this.userRepository.getUserByEmail(email);
  }

  getAllUsers(): UserEntity[] {
    return this.userRepository.getAllUsers();
  }
}
