import { NextFunction, Request, Response } from 'express';
import { HtppStatus } from '../Enums/HttpStatus';
import mapRequestBody from '../helpers/mapRequestBody';
import { AuthService } from '../interfaces/contracts/AuthService';
import { ClientService } from '../interfaces/contracts/ClientService';
import { CnaeService } from '../interfaces/contracts/CnaeService';
import { LicenseService } from '../interfaces/contracts/LicenseService';
import { CreateClientRequest } from '../interfaces/requests/CreateClientRequest';
import { CreateClientWork } from '../unitWorks/CreateClientWork';

export class ClientController {
  constructor(
    private service: ClientService,
    private authService: AuthService,
    private cnaeService: CnaeService,
    private licenseService: LicenseService,
  ) {
    this.create = this.create.bind(this);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { client, user } = mapRequestBody<CreateClientRequest>(req);

      const unitWork = new CreateClientWork(
        this.service,
        this.authService,
        this.cnaeService,
        this.licenseService,
      );


      const {  } = await unitWork.buildUnitWork(user, client, client.cnaes);

      return res.status(HtppStatus.CREATED).json({ message: 'created!' });
    } catch (error) {
      next(error);
    }
  }
}
