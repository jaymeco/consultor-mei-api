export interface WithJwtPayload<Model> {
  access_token: string;
  expires_in: string;
  model: Model;
}
