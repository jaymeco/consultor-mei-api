import {
  authService,
  cnaeService,
  clientService,
  licenseService,
  administratorService,
} from '../services';
import { AdministratorController } from './AdministratorController';
import { AuthController } from './AuthController';
import { ClientController } from './ClientController';


const administratorController = new AdministratorController(
  administratorService,
  authService,
);

const authController = new AuthController(
  authService,
);

const clientController = new ClientController(
  clientService,
  authService,
  cnaeService,
  licenseService,
);

export { administratorController, authController, clientController };
