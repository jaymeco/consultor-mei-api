import { errorScope } from '../constants/ErrorScope';
import { BaseError } from '../interfaces/errors/BaseError';

export class Exception {
  protected buildError<Detail = any>(
    name: string,
    scope: number,
    message: string,
    details?: any[],
    previous?: any,
  ): BaseError<Detail> {
    return {
      name,
      scope,
      message,
      details,
      previous,
    };
  }

  public unexpectedError(error: Error): BaseError {
    return this.buildError(
      'UnexpectedError',
      errorScope.SERVER_ERROR,
      'Ocorreu um erro inesperado!',
      undefined,
      error,
    );
  }
}
