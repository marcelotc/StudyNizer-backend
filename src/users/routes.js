import { Router } from 'express';

import { loginController, registerController } from './controllers/sessionController.js';

import { 
    getBoardTasksTodo, 
    addBoardTasksTodo,
    updateBoardTasksTodo, 
    deleteBoardTasksTodo,
    getBoardTasksDoing, 
    addBoardTasksDoing,
    updateBoardTasksDoing, 
    deleteBoardTasksDoing,
    getBoardTasksCompleted, 
    addBoardTasksCompleted,
    updateBoardTasksCompleted, 
    deleteBoardTasksCompleted,
} from './controllers/boardController.js';

import { getSubjects, addSubjects, updateSubjects, deleteSubjects, deleteSubjectsMarkdown } from './controllers/subjectsController.js';

import { getMarkdown, getMarkdownToExport, addMarkdown, addMarkdownImport, updateMarkdown, deleteMarkdown } from './controllers/makdownController.js';

import authMiddleware from '../app/middlewares/auth.js';

const router = new Router();

router.post('/register' , registerController); 

router.post('/login' , loginController); 

router.use(authMiddleware);

//////////////// BoardTasksTodo //////////////// 

router.get('/board-tasks-todo/:id', getBoardTasksTodo); 
router.post('/board-tasks-todo', addBoardTasksTodo); 
router.put('/board-tasks-todo/:id', updateBoardTasksTodo); 
router.delete('/board-tasks-todo/:id', deleteBoardTasksTodo); 

//////////////// BoardTasksDoing //////////////// 

router.get('/board-tasks-doing/:id', getBoardTasksDoing); 
router.post('/board-tasks-doing', addBoardTasksDoing); 
router.put('/board-tasks-doing/:id', updateBoardTasksDoing); 
router.delete('/board-tasks-doing/:id', deleteBoardTasksDoing); 

//////////////// BoardTasksCompleted //////////////// 

router.get('/board-tasks-completed/:id', getBoardTasksCompleted); 
router.post('/board-tasks-completed', addBoardTasksCompleted); 
router.put('/board-tasks-completed/:id', updateBoardTasksCompleted); 
router.delete('/board-tasks-completed/:id', deleteBoardTasksCompleted); 

//////////////// Subjects //////////////// 

router.get('/subjects/:id', getSubjects); 
router.post('/subjects', addSubjects); 
router.put('/subjects/:id', updateSubjects); 
router.delete('/subjects/:id', deleteSubjects); 
router.delete('/subjectsMarkdown/:id/:subjectName', deleteSubjectsMarkdown); 

//////////////// Markown //////////////// 

router.get('/markdown/:id', getMarkdown);
router.get('/markdown/:id/:subjectTitle', getMarkdownToExport);
router.post('/markdown', addMarkdown); 
router.post('/markdownImport', addMarkdownImport); 
router.put('/markdown/:id', updateMarkdown); 
router.delete('/markdown/:id', deleteMarkdown); 

export default router;