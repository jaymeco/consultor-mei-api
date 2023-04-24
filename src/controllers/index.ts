import { administratorService, authService } from '../services';
import { AdministratorController } from './AdministratorController';
import { AuthController } from './AuthController';


const administratorController = new AdministratorController(
  administratorService,
  authService,
);

const authController = new AuthController(
  authService,
);

export { administratorController, authController };
