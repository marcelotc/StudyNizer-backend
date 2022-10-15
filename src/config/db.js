import pg from "pg";

const pool = new pg.Pool({
    user: 'postgres',
    host: 'containers-us-west-76.railway.app',
    database: 'railway',
    password: 'kiwwBNTLwffJVIJVw59H',
    port: process.env.PORT,
});

export default pool;