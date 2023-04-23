import { errorScope } from '../constants/ErrorScope';
import { Exception } from './Exception';

export class AutheticationException extends Exception {
  public tokenNotFound() {
    return this.buildError(
      'TokenNotFoundError',
      errorScope.AUTHENTICATION.TOKEN_NOT_FOUND,
      'Token não encontrado!',
      undefined,
    );
  }
  
  public invalidToken() {
    return this.buildError(
      'InvalidTokenError',
      errorScope.AUTHENTICATION.INVALID_TOKEN,
      'Token fornecido está inválido!',
      undefined,
    );
  }

  public expiredtoken() {
    return this.buildError(
      'ExpiredTokenError',
      errorScope.AUTHENTICATION.EXPIRED_TOKEN,
      'Token de acesso está expirado!',
      undefined,
    );
  }
}
