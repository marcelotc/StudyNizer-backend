import pool from '../../config/db.js';
import { getSubjectsQuery, checkUserExists, addSubjectsQuery, updateSubjectsQuery, deleteSubjectsQuery, checkSubjectsExists } from '../queries.js';

export const getSubjects = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(checkUserExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }
        pool.query(getSubjectsQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    })
}

export const addSubjects = (req, res) => {
    const { title, users_id } = req.body;

    pool.query(checkUserExists, [users_id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(addSubjectsQuery, [title, users_id], (error, results) => {
            res.status(201).send("Subject added Successfully!");
        })
    })
}

export const updateSubjects = (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;

    pool.query(checkSubjectsExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Subject not exists.");
            return;
        }

        pool.query(updateSubjectsQuery, [title, id], (error, results) => {
            res.status(201).send("Subject updated!");
        })
    })

}

export const deleteSubjects = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(checkSubjectsExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Subject not exists.");
            return;
        }

        pool.query(deleteSubjectsQuery, [id], (error, results) => {
            res.status(201).send("Subject deleted!");
        })
    })
}