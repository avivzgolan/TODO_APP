import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const initializeDB = async () => {
  const initSql = fs
    .readFileSync(path.join(__dirname, "../init.sql"))
    .toString();
  try {
    await pool.query(initSql);
    console.log("Database initialized successfully.");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

initializeDB();

export default pool;
