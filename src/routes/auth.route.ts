
import { Router } from 'express';
import { administratorController } from '../controllers';
import createAdministratorValidator from '../validators/createAdministratorValidator';

const authRouter = Router();

authRouter.post('/administrator/register', createAdministratorValidator, administratorController.create);

export default authRouter;
