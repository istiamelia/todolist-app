import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "todoapp",
    password: "Cotobabat23",
    port: 5432,
});

export default pool;
