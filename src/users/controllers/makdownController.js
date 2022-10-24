import pool from '../../config/db.js';
import { getMarkdownQuery, checkUserExists} from '../queries.js';

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
