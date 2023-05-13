import { ResourceException } from '../Exceptions/ResourceException';
import { ClientService as Contract } from '../interfaces/contracts/ClientService';
import { CreateClientDto } from '../interfaces/dtos/CreateClient';
import { models } from '../models';
import { Client } from '../models/Client';

export class ClientService implements Contract {
  public async create(data: CreateClientDto): Promise<Client> {
    await this.throwIfCnpjAlreadyExists(data.company_cnpj);
    
    await this.throwIfEmailAlreadyExists(data.email);

    const client = await models.Client.create({
      name: data.name,
      email: data.email,
      company_name: data.company_name,
      company_cnpj: data.company_cnpj,
      state: data.state,
      license_id: data.license.id,
      user_id: data.user.id,
    });

    return client;
  }

  private async throwIfCnpjAlreadyExists(cnpj: string): Promise<void> {
    const exists = await models.Client.count({ where: { company_cnpj: cnpj } });

    if (Boolean(exists)) {
      throw new ResourceException()
        .alreadyExists('client', 'company_cnpj', cnpj);
    }
  }

  private async throwIfEmailAlreadyExists(email: string): Promise<void> {
    const exists = await models.Client.count({ where: { email } });

    if (Boolean(exists)) {
      throw new ResourceException()
        .alreadyExists('client', 'email', email);
    }
  }
}
