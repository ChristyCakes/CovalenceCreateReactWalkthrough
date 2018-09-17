import { Router } from 'express';       // import what you need from express instead of entire module
import peopleRouter from './people';

let router = Router();          // no need for express.router like in express examples because of line 1

router.use('/people', peopleRouter);

export default router;