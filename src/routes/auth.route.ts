
import { Router } from 'express';
import { administratorController, authController, clientController } from '../controllers';
import createAdministratorValidator from '../validators/createAdministratorValidator';
import CreateClientValidator from '../validators/createClientValidator';
import loginValidator from '../validators/loginValidator';

const authRouter = Router();

authRouter.post('/administrator/register', createAdministratorValidator, administratorController.create);
authRouter.post('/clients/register', CreateClientValidator, clientController.create);
authRouter.post('/login', loginValidator, authController.login);

export default authRouter;
