import {
  ValidationError,
  UnknownFieldsError,
  FieldValidationError,
  AlternativeValidationError,
  GroupedAlternativeValidationError,
} from 'express-validator';

import { errorScope } from '../../constants/ErrorScope';
import { BaseError } from '../../interfaces/errors/BaseError';

function handleFieldError(error: FieldValidationError) {
  return {
    field: error.path,
    code: error.msg,
    payload: error.value,
  };
}

function handleAlternativeError(error: AlternativeValidationError) {
  return error.nestedErrors.map(handleFieldError);
}

function handleUnknownFieldsError(error: UnknownFieldsError) {
  return error.fields.map(err => ({
    field: err.path,
    code: 'unknown',
    payload: err.value,
  }));
}

function handleAlternativeGroupedError(
  error: GroupedAlternativeValidationError,
) {
  return error.nestedErrors
    .map((nestedErrors: FieldValidationError[]) => {
      return nestedErrors.map(handleFieldError);
    }).flat();
}

function mapValidationErroType(error: ValidationError) {
  const mappedType = {
    'field': handleFieldError,
    'alternative': handleAlternativeError,
    'unknown_fields': handleUnknownFieldsError,
    'alternative_grouped': handleAlternativeGroupedError,
  };

  return mappedType[error.type](error as any);
}

export default (details: ValidationError[]): BaseError => {
  return {
    name: 'ValidationError',
    scope: errorScope.VALIDATION,
    message: 'Erro de validação',
    details: details.map(error => mapValidationErroType(error)),
  };
};
