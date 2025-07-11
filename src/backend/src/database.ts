import { Pool } from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const poolConfig: {
  user: string;
  password: string;
  database: string;
  port: number;
  host: string;
  ssl?: { ca: string; key: string; cert: string; rejectUnauthorized: boolean };
} = {
  user: process.env.DB_USER!,
  password: process.env.DB_USER_PASSWORD!,
  database: process.env.DB_NAME!,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST!,
};

// if (process.env.TLS_CA && process.env.TLS_KEY && process.env.TLS_CERT) {
//   poolConfig.ssl = {
//     ca: process.env.TLS_CA,
//     key: process.env.TLS_KEY,
//     cert: process.env.TLS_CERT,
//     rejectUnauthorized: true,
//   };
// }

const pool = new Pool(poolConfig);

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
