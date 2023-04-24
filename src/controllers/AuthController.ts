import { NextFunction, Request, Response } from 'express';
import { HtppStatus } from '../Enums/HttpStatus';
import mapRequestBody from '../helpers/mapRequestBody';
import { AuthService } from '../interfaces/contracts/AuthService';
import { LoginRequest } from '../interfaces/requests/LoginRequest';

export class AuthController {
  constructor(
    private service: AuthService,
  ) {
    this.login = this.login.bind(this);
  }
  
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = mapRequestBody<LoginRequest>(req);
    
      const authPayload = await this.service.login(data);
      const { model: user } = authPayload;

      return res.status(HtppStatus.OK).json({
        access_token: authPayload.access_token,
        expires_in: authPayload.expires_in,
        user: {
          id: user.id,
          name: user.name,
          avatar_path: user.avatar_path,
          email: user.email,
          license: {
            id: user.license.id,
            license_type_id: user.license.license_type_id,
          },
          user_type: {
            id: user.user_type.id,
            descrption: user.user_type.description,
          },
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
