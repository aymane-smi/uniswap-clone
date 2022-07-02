const { Pool } = require("pg");
require("dotenv").config();


const config = {
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
}
console.log(config);
const pool = new Pool(config);

module.exports = {
    create: (query, createInputs) => pool.query(query, createInputs),
    query: (query, queryInputs) => pool.query(query, queryInputs),
}