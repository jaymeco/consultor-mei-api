import { NextFunction, Request, Response } from 'express';
import { HtppStatus } from '../Enums/HttpStatus';
import mapRequestBody from '../helpers/mapRequestBody';
import { AdministratorService } from '../interfaces/contracts/AdministratorService';
import { AuthService } from '../interfaces/contracts/AuthService';
import { CreateAdministratorRequest } from '../interfaces/requests/CreateAdministratorRequest';
import { CreateAdministratorWork } from '../unitWorks/CreateAdministratorWork';

export class AdministratorController {
  constructor(
    private service: AdministratorService,
    private authService: AuthService,
  ) {
    this.create = this.create.bind(this);
  }

  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const {
        user,
        admin,
      } = mapRequestBody<CreateAdministratorRequest>(request);

      const { createdAdmin, createdUser } = await new CreateAdministratorWork(
        this.service,
        this.authService,
      ).buildUnitWork(user, admin);

      return response.status(HtppStatus.CREATED).json({
        id: createdAdmin.id,
        name: createdAdmin.name,
        email: createdAdmin.email,
        user: {
          id: createdUser.id,
          name: createdUser.name,
          email: createdUser.email,
          avatar_path: createdUser.avatar_path,
          license_id: createdUser.license_id,
          user_type_id: createdUser.user_type_id,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
