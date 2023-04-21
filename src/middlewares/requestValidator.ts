import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

import requestHandler from "../handlers/errors/requestHandler";

export default (rules: ValidationChain[] = []) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    await Promise.all(rules.map(rule => rule.run(request)));
    const errors = validationResult(request);


    if (!errors.isEmpty()) {
      return next(requestHandler(errors.array()));
    }

    return next();
  }
};
