import pool from '../../config/db.js';
import { getBoardTasksQuery, checkUserExists, addBoardTasksQuery, updateBoardTasksQuery, deleteBoardTasksQuery, checkTaskxists } from '../queries.js';

export const getBoardTasks = (req, res) => {
    pool.query(getBoardTasksQuery, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

export const addBoardTasks = (req, res) => {
    const { title, description, priority, due_date_start, due_date_end, users_id } = req.body;

    pool.query(checkUserExists, [users_id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(addBoardTasksQuery, [ title, description, priority, due_date_start, due_date_end, users_id], (error, results) => {
            res.status(201).send("Task added Successfully!");
        })
    })
}

export const updateBoardTasks = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, priority, due_date_start, due_date_end } = req.body;

    pool.query(checkTaskxists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Task not exists.");
            return;
        }

        pool.query(updateBoardTasksQuery, [ title, description, priority, due_date_start, due_date_end, id], (error, results) => {
            res.status(201).send("Task updated!");
        })
    })

}

export const deleteBoardTasks = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(checkTaskxists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Task not exists.");
            return;
        }

        pool.query(deleteBoardTasksQuery, [id], (error, results) => {
            res.status(201).send("Task deleted!");
        })
    })
}