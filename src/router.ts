import { Router, Express } from 'express';

const router = Router();

router.get('/', (rq, res) => res.json({ text: 'Testee!' }))

export default (app: Express) => app.use(router);
