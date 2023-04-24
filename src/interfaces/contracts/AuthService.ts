import { User } from '../../models/User';
import { CreateUserDto } from '../dtos/CreateUser';
import { LoginDto } from '../dtos/Login';
import { WithJwtPayload } from '../utils/WithJwtPayload';

export interface AuthService {
  createUser(data: CreateUserDto): Promise<User>;

  login(data: LoginDto): Promise<WithJwtPayload<User>>;
}
