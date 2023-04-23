export interface BaseError<ErrorDetail = any> extends Error {
  scope: number;
  message: string;
  details?: ErrorDetail[];
  previous?: any;
}
