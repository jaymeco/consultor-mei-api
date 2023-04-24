/* eslint-disable import/no-extraneous-dependencies */
import jwt, { JwtPayload } from 'jsonwebtoken';
import { addHours } from 'date-fns';
import process from 'process';
import _ from 'lodash';
import { AutheticationException } from '../Exceptions/AuthenticationException';

interface JwtResponse {
  access_token: string;
  expires_in: string;
}

const JWT_SECRET = process.env.JWT_SECRET || 'cb60808c25e4f66c0efdda58dc27f4b7';

export class JwtService {
  public generateToken(
    userId: number,
    userTypeId: number,
  ): JwtResponse {
    const token = jwt.sign(
      { userId, userTypeId },
      JWT_SECRET,
      {
        expiresIn: '2h',
      });

    return {
      access_token: token,
      expires_in: addHours(new Date(), 2).toISOString(),
    };
  }

  public verifyToken(token: string) {
    try {
      const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;

      return payload;
    } catch (error: any) {
      if (!_.isUndefined(error.name) && error.name === 'TokenExpiredError') {
        throw new AutheticationException().expiredtoken();
      }

      if (!_.isUndefined(error.name) && error.name === 'JsonWebTokenError') {
        throw new AutheticationException().invalidToken();
      }

      throw error;
    }
  }
}
