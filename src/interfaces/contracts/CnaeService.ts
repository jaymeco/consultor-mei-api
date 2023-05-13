import { Client } from '../../models/Client';
import { Cnae } from '../../models/Cnae';
import { CreateCnaeDto } from '../dtos/CreateCnae';

export interface CnaeService {
  create(number: string): Promise<Cnae>;

  createMany(data: CreateCnaeDto): Promise<Cnae[]>;

  associateCnaeWithClient(
    client: Client,
    cnaes: Cnae | Cnae[],
  ): Promise<void>;
}
