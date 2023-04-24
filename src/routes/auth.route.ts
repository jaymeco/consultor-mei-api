
import { Router } from 'express';
import { administratorController, authController } from '../controllers';
import createAdministratorValidator from '../validators/createAdministratorValidator';
import loginValidator from '../validators/loginValidator';

const authRouter = Router();

authRouter.post('/administrator/register', createAdministratorValidator, administratorController.create);
authRouter.post('/login', loginValidator, authController.login);

export default authRouter;
