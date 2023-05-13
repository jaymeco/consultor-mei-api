import { Client } from '../../models/Client';
import { CreateClientDto } from '../dtos/CreateClient';

export interface ClientService {
  create(data: CreateClientDto): Promise<Client>;
}
