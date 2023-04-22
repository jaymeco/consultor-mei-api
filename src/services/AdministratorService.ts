import { ResourceException } from '../Exceptions/ResourceException';
import { AdministratorService as Contract } from '../interfaces/contracts/AdministratorService';
import { CreateAdministratorDto } from '../interfaces/dtos/CreateAdministrator';
import { models } from '../models';
import { Administrator } from '../models/Administrator';

export class AdministratorService implements Contract {
  public async create(data: CreateAdministratorDto): Promise<Administrator> {
    if (await this.checkIfUniqueEmail(data.email)) {
      this.throwIfExists('email', data.email);
    }

    const instance = await models.Administrator.create({
      name: data.name,
      email: data.email,
      user_id: data.user_id,
    });

    const admin = await instance.save();

    return admin;
  }

  private async checkIfUniqueEmail(email: string): Promise<boolean> {
    const exists = await models.Administrator.count({
      where: { email },
    });

    return Boolean(exists);
  }

  private async throwIfExists(field: string, value?: any) {
    throw new ResourceException()
      .alreadyExists('administrator', field, value);
  }
}
