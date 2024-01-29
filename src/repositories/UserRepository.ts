import { UserDTO } from '../dtos/UserDTO';
import { prisma } from '../prisma/client';
import { UserModel } from '../models/UserModels';

export class UserRepository {
  async createUser(user: UserDTO): Promise<UserModel> {
    try {
      const userAlreadyExists = await prisma.user.findUnique({
        where: {
          email: user.email,
          document: user.document,
        },
      });

      if (userAlreadyExists) {
        throw new Error('User with the same email or document already exists.');
      }

      const createUser = await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
          document: user.document,
        },
      });

      return new UserModel(createUser);
    } catch (error) {
      throw error;
    }
  }
}
