import { body } from 'express-validator';
import { validationErrors } from '../constants/errors';
import requestValidatorMiddleware from '../middlewares/requestValidator';

export default requestValidatorMiddleware([
  body('email')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isEmail().withMessage(validationErrors.email),
  body('password')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isLength({ min: 5 }).withMessage(validationErrors.minLength),
]);
