// PG database client/connection setup
require('dotenv');
const { Pool } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "meditation"
};

const db = new Pool(dbParams);
// console.log("before connect", db);
db.connect();

// console.log("after connect", db);

module.exports = db;