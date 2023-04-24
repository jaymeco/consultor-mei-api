/* eslint-disable import/no-extraneous-dependencies */
import bcrypt from 'bcrypt';
import _ from 'lodash';
import { AuthService as Contract } from '../interfaces/contracts/AuthService';
import { CreateUserDto } from '../interfaces/dtos/CreateUser';
import { models } from '../models';
import { User } from '../models/User';
import { ResourceException } from '../Exceptions/ResourceException';
import { LoginDto } from '../interfaces/dtos/Login';
import { AutheticationException } from '../Exceptions/AuthenticationException';
import { UserType } from '../models/UserType';
import { WithJwtPayload } from '../interfaces/utils/WithJwtPayload';
import { JwtService } from './JwtService';

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
      user_type_id: data.user_type_id,
    });

    return user;
  }

  public async login(data: LoginDto): Promise<WithJwtPayload<User>> {
    const user = await this.findUserByEmailOrError(data.email);

    const isValidPassword = await this.comparePassword(
      data.password,
      user.password as string,
    );

    if (!isValidPassword) {
      throw new AutheticationException()
        .invalidCredentials();
    }

    const jwt = new JwtService()
      .generateToken(user.id, user.user_type_id);

    return {
      access_token: jwt.access_token,
      expires_in: jwt.expires_in,
      model: user,
    };
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

  private throwIfNotFound(field: string, value?: any) {
    throw (new ResourceException())
      .notFound('user', field, value);
  }

  private async comparePassword(password: string, current: string) {
    const isValid = await bcrypt.compare(password, current);

    return isValid;
  }

  private async findUserByEmailOrError(email: string): Promise<User> {
    const user = await models.User
      .findOne({
        where: { email: email },
        include: [UserType],
      });

    if (_.isNull(user)) {
      this.throwIfNotFound('email', email);
    }

    return user as User;
  }
}
