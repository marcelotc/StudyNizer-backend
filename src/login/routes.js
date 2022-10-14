import { Router } from 'express';

import { registerController } from './registerController.js';
import { loginController } from './loginController.js';

import authMiddleware from '../app/middlewares/auth.js';

const router = new Router();

router.post('/register' , registerController); //POST request to register the user

router.post('/login' , loginController); // POST request to login the user

router.use(authMiddleware);

router.get('/test', (req, res) => {
    res.send('test')
}); 

export default router;