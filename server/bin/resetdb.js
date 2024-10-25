require('dotenv').config();
const fs = require('fs');
const db = require('../db/connection');

const runSchemaFiles = async () => {
  console.log(`-> Loading Schema Files ...`);
  const schemaFilenames = fs.readdirSync('./db/schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runSeedFiles = async () => {
  console.log(`-> Loading Seeds ...`);
  const schemaFilenames = fs.readdirSync('./db/seeds');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${fn}`);
    await db.query(sql);
  }
};

const runResetDB = async () => {
  try {
    if (process.env.PGHOST && process.env.PGUSER && process.env.PGPASS) {
      console.log(`-> Connecting to PG on ${process.env.PGHOST} as ${process.env.PGUSER}...`);
    } else {
      console.error('Missing database environment variables.');
      process.exit(1);
    }

    await runSchemaFiles();
    await runSeedFiles();
    process.exit();
  } catch (err) {
    console.error(`Failed due to error: ${err}`);
    process.exit(1);
  }
};

runResetDB();