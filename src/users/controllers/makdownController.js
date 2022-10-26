import pool from '../../config/db.js';
import { getMarkdownQuery, addMarkdownQuery, updateMarkdownQuery, checkUserExists, deleteMarkdownQuery, checkMarkdownExists} from '../queries.js';

export const getMarkdown = (req, res) => {
    const id = req.params.id;

    pool.query(checkUserExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }
        pool.query(getMarkdownQuery, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results.rows);
        })
    })
}
export const addMarkdown = (req, res) => {
    const { annotation_block, page_name, url_id, page_id, subject_name, users_id } = req.body;

    pool.query(checkUserExists, [users_id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(addMarkdownQuery, [annotation_block, page_name, url_id, page_id, subject_name, users_id], (error, results) => {
            res.status(201).send("Markdown added Successfully!");
        })
    })
}

export const updateMarkdown  = (req, res) => {
    const id = req.params.id;
    const { annotation_block, page_name, url_id, page_id, subject_name } = req.body;

    pool.query(checkMarkdownExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Markdown not exists.");
            return;
        }

        pool.query(updateMarkdownQuery, [ annotation_block, page_name, url_id, page_id, subject_name, id], (error, results) => {
            res.status(201).send("Markdown updated!");
        })
    })
}

export const deleteMarkdown  = (req, res) => {
    const id = req.params.id;

    pool.query(checkMarkdownExists, [id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("Markdown not exists.");
            return;
        }

        pool.query(deleteMarkdownQuery, [id], (error, results) => {
            res.status(201).send("Markdown deleted!");
        })
    })
}