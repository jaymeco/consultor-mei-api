import { CreateCnaeDto } from '../dtos/CreateCnae';
import { CreateUserDto } from '../dtos/CreateUser';

export interface CreateClientRequest {
  client: {
    name: string;
    email: string;
    company_name: string;
    company_cnpj: string;
    state: string;
    cnaes: CreateCnaeDto;
  };
  user: CreateUserDto;
}
