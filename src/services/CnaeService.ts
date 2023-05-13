import { isNull } from 'lodash';
import { CnaeService as Contract } from '../interfaces/contracts/CnaeService';
import { CreateCnaeDto } from '../interfaces/dtos/CreateCnae';
import { models } from '../models';
import { Client } from '../models/Client';
import { ClientCnae } from '../models/ClientCnae';
import { Cnae } from '../models/Cnae';

export class CnaeService implements Contract {
  public async create(number: string): Promise<Cnae> {
    const foundCnae = await this.findByNumber(number);
    if (!isNull(foundCnae)) {
      return foundCnae;
    }

    const cnae = await models.Cnae.create({
      number,
    });

    return cnae;
  }

  public async createMany(cnaes: CreateCnaeDto): Promise<Cnae[]> {
    const promises = cnaes.map(async body => {
      const foundCnae = await this.findByNumber(body.number);
      if (!isNull(foundCnae)) {
        return foundCnae;
      }

      const cnae = await models.Cnae.create({
        number: body.number,
      });

      return cnae;
    });

    const results = await Promise.all(promises);

    return results;
  }

  private async findByNumber(number: string): Promise<Cnae | null> {
    const cnae = await models.Cnae.findOne({ where: { number } });

    return cnae;
  }

  public async associateCnaeWithClient(
    client: Client,
    cnaes: Cnae | Cnae[],
  ): Promise<void> {
    if (cnaes instanceof Cnae) {
      await ClientCnae.create({
        client_id: client.id,
        cnae_id: cnaes.id,
      });
    } else {
      const promises = cnaes.map(async (cnae) => {
        await ClientCnae.create({
          cnae_id: cnae.id,
          client_id: client.id,
        });
      });

      await Promise.all(promises);
    }
  }
}
