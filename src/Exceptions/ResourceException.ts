import { errorScope } from '../constants/ErrorScope';
import { ResourceError } from '../interfaces/errors/ResourceError';
import { Exception } from './Exception';

export class ResourceException extends Exception {
  public alreadyExists(
    resource: string,
    field: string,
    value: any,
    previous?: any,
  ) {
    return this.buildError<ResourceError>(
      'ResourceError',
      errorScope.RESOURCE.ALREADY_EXISTS,
      'Recurso já existe!',
      [{ field, value, resource }],
      previous,
    );
  }

  public notFound(
    resource: string,
    field: string,
    value: any,
    previous?: any,
  ) {
    return this.buildError<ResourceError>(
      'ResourceError',
      errorScope.RESOURCE.NOT_FOUND,
      'Recurso não encontrado!',
      [{ field, value, resource }],
      previous,
    );
  }
}
