import { Request } from 'express';
import { matchedData } from 'express-validator';

export default function <T>(request: Request): T {
  return matchedData(request) as T;
}
