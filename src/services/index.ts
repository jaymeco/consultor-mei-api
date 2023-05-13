import { AuthService } from './AuthService';
import { AdministratorService } from './AdministratorService';
import { CnaeService } from './CnaeService';
import { ClientService } from './ClientService';
import { LicenseService } from './LicenseService';

const authService = new AuthService();
const administratorService = new AdministratorService();
const cnaeService = new CnaeService();
const clientService = new ClientService();
const licenseService = new LicenseService();


export {
  authService,
  cnaeService,
  clientService,
  licenseService,
  administratorService,
};
