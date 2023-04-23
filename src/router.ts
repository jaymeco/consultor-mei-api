import { Router, Express } from 'express';
import authRouter from './routes/auth.route';

const router = Router();

router.get('/', (rq, res) => res.json({ text: 'Testee!' }));

router.use('/auth', authRouter);

export default (app: Express) => app.use(router);
