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
  body('admin.name')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail(),
  body('admin.email')
    .exists().withMessage(validationErrors.required).bail()
    .notEmpty().withMessage(validationErrors.notEmpty).bail()
    .isEmail().withMessage(validationErrors.email),
]);
