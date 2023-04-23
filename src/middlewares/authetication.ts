/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import _ from 'lodash';
import { HtppStatus } from '../Enums/HttpStatus';
import { AutheticationException } from '../Exceptions/AuthenticationException';
import { JwtService } from '../services/JwtService';

export default (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authException = new AutheticationException();
  const jwtService = new JwtService();

  const { authorization } = request.headers;

  if (_.isUndefined(authorization)) {
    return response
      .status(HtppStatus.UNAUTHORIZED)
      .json(authException.tokenNotFound());
  }

  const [prefix, token] = authorization.split(' ', 2);

  if (prefix !== 'Bearer') {
    return response
      .status(HtppStatus.UNAUTHORIZED)
      .json(authException.invalidToken());
  }

  jwtService.verifyToken(token);

  return next();
}; 
