import dotenv from "dotenv";

dotenv.config();

export default {
  port: 3000,
  db: process.env.DATABASE_URL,
  logLevel: "info",
};
