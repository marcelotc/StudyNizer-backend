import pg from "pg";

const pool = new pg.Pool({
    user: 'postgres',
    host: process.env.APP_HOST,
    database: 'railway',
    password: process.env.APP_PASSWORD,
    port: process.env.PORT,
});

export default pool;