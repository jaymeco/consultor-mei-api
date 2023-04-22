import { NextFunction, Request, Response } from 'express';
import { HtppStatus } from '../Enums/HttpStatus';
import mapRequestBody from '../helpers/mapRequestBody';
import { AdministratorService } from '../interfaces/contracts/AdministratorService';
import { AuthService } from '../interfaces/contracts/AuthService';
import { CreateAdministratorRequest } from '../interfaces/requests/CreateAdministratorRequest';

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

      const createdUser = await this.authService.createUser(user);

      const createdAdmin = await this.service.create({
        ...admin,
        user_id: createdUser.id,
      });

      return response.status(HtppStatus.CREATED).json({
        id: createdAdmin.id,
        name: createdAdmin.name,
        email: createdAdmin.email,
        user: {
          id: createdAdmin.user.id,
          name: createdAdmin.user.name,
          email: createdAdmin.user.email,
          avatar_path: createdAdmin.user.avatar_path,
          license_id: createdAdmin.user.license_id,
          user_type_id: createdAdmin.user.user_type_id,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
