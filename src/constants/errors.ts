export const errors = {
  AUTH_CREDENTIALS: 'auth:invalidCredentials',
  TOKEN_NOT_FOUND: 'auth:tokenNotFound',
  INVALID_TOKEN: 'auth:invalidToken',
  EXPIRED_TOKEN: 'auth:expiredRoken',
  INTERNAL_ERROR: 'server:unexpectedFail',
  RESOURCE_ALREADY_EXISTS: 'resource:alreadyExists',
  RESOURCE_NOT_FOUND: 'resource:notFound',
  PERMISSION_NOT_ADMIN: 'permission:notAdmin',
  PERMISSION_NOT_CONSULTANT: 'permission:notConsultant',
  PERMISSION_NOT_CLIENT: 'permission:notClient',
  PERMISSION_NOT_COMMERCIAL: 'permission:notCommercial',
}


export const validationErrors = {
  type: 'invalidType',
  notEmpty: 'cannotBeEmpty',
  required: 'requiredField',
  date: 'invalidDate',
  email: 'invalidEmail',
  minLength: 'lessThenMinLength',
  maxLength: 'moreThenMaxLength',
  invalidLength: 'invalidLength',
};
