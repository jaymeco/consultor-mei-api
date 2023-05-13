export interface CreateClientDto {
  name: string;
  email: string;
  company_name: string;
  company_cnpj: string;
  state: string;
  user: {
    id: number;
  };
  license: {
    id: number;
  };
}
