import { AuthService as Contract } from '../interfaces/contracts/AuthService';
import { CreateUserDto } from '../interfaces/dtos/CreateUser';
import { models } from '../models';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import { ResourceException } from '../Exceptions/ResourceException';

export class AuthService implements Contract {
  public async createUser(data: CreateUserDto): Promise<User> {
    if (await this.checkIfExistsByEmail(data.email)) {
      this.throwIfExists('email', data.email);
    }

    const password = await this.hasPassword(data.password);

    const user = await models.User.create({
      name: data.name,
      email: data.email,
      password,
      avatar_path: data.avatar_path,
      license_id: data.license_id,
      user_type_id: data.user_type_id,
    });

    return user;
  }

  private async hasPassword(password: string) {
    password = await bcrypt.hash(password, 12);

    return password;
  }

  private async checkIfExistsByEmail(email: string) {
    const exists = await models.User.count({ where: { email } });

    return Boolean(exists);
  }

  private throwIfExists(field: string, value?: any) {
    throw (new ResourceException())
      .alreadyExists('user', field, value);
  }
}
