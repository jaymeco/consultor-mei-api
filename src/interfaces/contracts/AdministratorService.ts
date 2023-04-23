import { Administrator } from '../../models/Administrator';
import { CreateAdministratorDto } from '../dtos/CreateAdministrator';

export interface AdministratorService {
  create(
    data: CreateAdministratorDto,
  ): Promise<Administrator>;
}
