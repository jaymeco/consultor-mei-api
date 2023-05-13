import { body } from 'express-validator';
import { validationErrors } from '../constants/errors';
import requestValidatorMiddleware from '../middlewares/requestValidator';

export default requestValidatorMiddleware([
  body('user')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail(),
  body('user.name')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail(),
  body('user.email')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isEmail().withMessage(validationErrors.email),
  body('user.avatar_path')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail(),
  body('user.user_type_id')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail(),
  body('user.password')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isLength({ min: 5 }).withMessage(validationErrors.minLength),
  body('client.name')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail(),
  body('client.email')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isEmail().withMessage(validationErrors.email),
  body('client.company_name')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail(),
  body('client.company_cnpj')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isLength({ min: 14, max: 14 })
    .withMessage(validationErrors.invalidLength).bail(),
  body('client.state')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail(),
  body('client.cnaes')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isArray({ min: 1 }).withMessage(validationErrors.minLength),
]);
