// PG database client/connection setup
require('dotenv').config();
const { Pool } = require('pg');

const dbParams = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASS,
  database: process.env.PGNAME
};

const db = new Pool(dbParams);
// console.log("before connect", db);
db.connect();

// console.log("after connect", db);

module.exports = db;