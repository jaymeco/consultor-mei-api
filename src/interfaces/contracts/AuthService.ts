import { User } from '../../models/User';
import { CreateUserDto } from '../dtos/CreateUser';

export interface AuthService {
  createUser(data: CreateUserDto): Promise<User>;
}
