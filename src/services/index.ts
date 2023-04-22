import { AuthService } from './AuthService';
import { AdministratorService } from './AdministratorService';

const authService = new AuthService();
const administratorService = new AdministratorService();

export {
  authService,
  administratorService,
};
