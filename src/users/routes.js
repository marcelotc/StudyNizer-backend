import { Router } from 'express';

import { loginController, registerController } from './controllers/sessionController.js';

import { getBoardTasks, addBoardTasks, updateBoardTasks, deleteBoardTasks } from './controllers/boardController.js';
import { getSubjects, addSubjects, updateSubjects, deleteSubjects } from './controllers/subjectsController.js';

import authMiddleware from '../app/middlewares/auth.js';

const router = new Router();

router.post('/register' , registerController); 

router.post('/login' , loginController); 

router.use(authMiddleware);

router.get('/board-tasks/:id', getBoardTasks); 
router.post('/board-tasks', addBoardTasks); 
router.put('/board-tasks/:id', updateBoardTasks); 
router.delete('/board-tasks/:id', deleteBoardTasks); 

router.get('/subjects/:id', getSubjects); 
router.post('/subjects', addSubjects); 
router.put('/subjects/:id', updateSubjects); 
router.delete('/subjects/:id', deleteSubjects); 

export default router;