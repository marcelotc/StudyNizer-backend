import { Router } from 'express';

import { loginController, registerController } from './controllers/sessionController.js';

import { getBoardTasks, addBoardTasks, updateBoardTasks, deleteBoardTasks } from './controllers/boardController.js';

import authMiddleware from '../app/middlewares/auth.js';

const router = new Router();

router.post('/register' , registerController); //POST request to register the user

router.post('/login' , loginController); // POST request to login the user

router.use(authMiddleware);

router.get('/board-tasks', getBoardTasks); 
router.post('/board-tasks', addBoardTasks); 
router.put('/board-tasks/:id', updateBoardTasks); 
router.delete('/board-tasks/:id', deleteBoardTasks); 

export default router;