import { administratorService, authService } from '../services';
import { AdministratorController } from './AdministratorController';


const administratorController = new AdministratorController(
  administratorService,
  authService,
);

export { administratorController };
