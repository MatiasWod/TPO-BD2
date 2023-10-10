const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "bdd2",
    password: "admin",
});

pool.connect();

module.exports = pool;