import { Exception } from '../../Exceptions/Exception';

export default function (error: any) {
  if (error !== undefined && error !== null && error.scope !== undefined) {
    return error;
  }

  return (new Exception()).unexpectedError(error);
}
