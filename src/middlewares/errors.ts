import { NextFunction, Request, Response } from 'express';
import { errorScope } from '../constants/ErrorScope';
import { BaseError } from '../interfaces/errors/BaseError';
import { HtppStatus } from '../Enums/HttpStatus';

function mapHtppStatus(error: BaseError) {
  const {
    AUTHENTICATION,
    PERMISSION,
    RESOURCE,
    VALIDATION,
  } = errorScope;

  return {
    [AUTHENTICATION.INVALID_CREDENTIALS]: HtppStatus.UNAUTHORIZED,
    [RESOURCE.ALREADY_EXISTS]: HtppStatus.UNPROCESSABLE,
    [RESOURCE.NOT_FOUND]: HtppStatus.UNPROCESSABLE,
    [VALIDATION]: HtppStatus.BAD_REQUEST,
    [PERMISSION]: HtppStatus.FORBIDEN,
  }[error.scope] || HtppStatus.UNEXPECTED_ERROR;
}

export default (
  error: any,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const status = mapHtppStatus(error);

  return response.status(status).json(error);
};
