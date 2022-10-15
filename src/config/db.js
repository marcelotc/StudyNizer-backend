import pg from "pg";

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'studynizer',
    password: 'admin',
    port: process.env.PORT,
});

export default pool;