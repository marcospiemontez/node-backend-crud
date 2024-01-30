import { UserRepository } from "../../domains/user/repositories/UserRepository";
import { UserService } from '../../domains/user/services/UserService';
import { UserController } from '../../controllers/UserController';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userRepository, userService, userController };
