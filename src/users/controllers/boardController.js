import pool from '../../config/db.js';
import { 
    checkUserExists, 
    checkTaskTodoExists, 
    checkTaskDoingExists, 
    checkTaskCompletedExists, 
    getBoardTasksTodoQuery, 
    addBoardTasksTodoQuery, 
    updateBoardTodoTasksQuery, 
    deleteBoardTasksTodoQuery, 
    getBoardTasksDoingQuery, 
    addBoardTasksDoingQuery, 
    updateBoardTasksDoingQuery, 
    deleteBoardTasksDoingQuery, 
    getBoardTasksCompletedQuery, 
    addBoardTasksCompletedQuery, 
    updateBoardTasksCompletedQuery, 
    deleteBoardTasksCompletedQuery, 
} from '../queries.js';

//////////////// BoardTasksTodo //////////////// 

export const getBoardTasksTodo = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query(checkUserExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(getBoardTasksTodoQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    })
}

export const addBoardTasksTodo = (req, res) => {
    const { title, description, priority, due_date_start, due_date_end, users_id } = req.body;

    pool.query(checkUserExists, [users_id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(addBoardTasksTodoQuery, [ title, description, priority, due_date_start, due_date_end, users_id], (error, results) => {
            res.status(201).send("Task added Successfully!");
        })
    })
}

export const updateBoardTasksTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, priority, due_date_start, due_date_end } = req.body;

    pool.query(checkTaskTodoExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Task not exists.");
            return;
        }

        pool.query(updateBoardTodoTasksQuery, [ title, description, priority, due_date_start, due_date_end, id], (error, results) => {
            res.status(201).send("Task updated!");
        })
    })

}

export const deleteBoardTasksTodo = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(checkTaskTodoExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Task not exists.");
            return;
        }

        pool.query(deleteBoardTasksTodoQuery, [id], (error, results) => {
            res.status(201).send("Task deleted!");
        })
    })
}

//////////////// BoardTasksDoing //////////////// 

export const getBoardTasksDoing  = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query(checkUserExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(getBoardTasksDoingQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    })
}

export const addBoardTasksDoing  = (req, res) => {
    const { title, description, priority, due_date_start, due_date_end, users_id } = req.body;

    pool.query(checkUserExists, [users_id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(addBoardTasksDoingQuery, [ title, description, priority, due_date_start, due_date_end, users_id], (error, results) => {
            res.status(201).send("Task added Successfully!");
        })
    })
}

export const updateBoardTasksDoing  = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, priority, due_date_start, due_date_end } = req.body;

    pool.query(checkTaskTodoExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Task not exists.");
            return;
        }

        pool.query(updateBoardTasksDoingQuery, [ title, description, priority, due_date_start, due_date_end, id], (error, results) => {
            res.status(201).send("Task updated!");
        })
    })

}

export const deleteBoardTasksDoing  = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(checkTaskTodoExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Task not exists.");
            return;
        }

        pool.query(deleteBoardTasksDoingQuery, [id], (error, results) => {
            res.status(201).send("Task deleted!");
        })
    })
}

//////////////// BoardTasksCompleted //////////////// 

export const getBoardTasksCompleted  = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query(checkUserExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(getBoardTasksCompletedQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    })
}

export const addBoardTasksCompleted  = (req, res) => {
    const { title, description, priority, due_date_start, due_date_end, users_id } = req.body;

    pool.query(checkUserExists, [users_id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(addBoardTasksCompletedQuery, [ title, description, priority, due_date_start, due_date_end, users_id], (error, results) => {
            res.status(201).send("Task added Successfully!");
        })
    })
}

export const updateBoardTasksCompleted  = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, priority, due_date_start, due_date_end } = req.body;

    pool.query(checkTaskCompletedExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Task not exists.");
            return;
        }

        pool.query(updateBoardTasksCompletedQuery, [ title, description, priority, due_date_start, due_date_end, id], (error, results) => {
            res.status(201).send("Task updated!");
        })
    })

}

export const deleteBoardTasksCompleted  = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(checkTaskCompletedExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Task not exists.");
            return;
        }

        pool.query(deleteBoardTasksCompletedQuery, [id], (error, results) => {
            res.status(201).send("Task deleted!");
        })
    })
}