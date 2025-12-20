import dotenv from "dotenv";
dotenv.config(); // <-- REQUIRED in ESM

import pkg from "pg";
const { Pool } = pkg;

console.log("DB CONFIG =>", {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  passwordType: typeof process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE
});

const pool = new Pool({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE
});

export function query(text, params) {
  return pool.query(text, params);
}
