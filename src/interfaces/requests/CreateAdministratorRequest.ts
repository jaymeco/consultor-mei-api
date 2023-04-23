import { CreateUserDto } from '../dtos/CreateUser';

export interface CreateAdministratorRequest {
  admin: {
    name: string;
    email: string;
  };
  user: CreateUserDto;
}
