import pool from '../../config/db.js';
import { getMarkdownQuery, addMarkdownQuery, updateMarkdownQuery, checkUserExists} from '../queries.js';

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
    const { annotation_block, page_name, url_id, page_id, subject_name, subjects_id, users_id } = req.body;

    pool.query(checkUserExists, [users_id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(addMarkdownQuery, [annotation_block, page_name, url_id, page_id, subject_name, subjects_id, users_id], (error, results) => {
            res.status(201).send("Markdown added Successfully!");
        })
    })
}

export const updateMarkdown = (req, res) => {
    const { annotation_block, page_name, url_id, page_id, subject_name, subjects_id, users_id } = req.body;

    pool.query(checkUserExists, [users_id], (error, results) => {
        if (!results.rows.length) {
            res.status(404).send("User does not exists.");
            return;
        }

        pool.query(updateMarkdownQuery, [annotation_block, page_name, url_id, page_id, subject_name, subjects_id, users_id], (error, results) => {
            res.status(201).send("Markdown added Successfully!");
        })
    })
}