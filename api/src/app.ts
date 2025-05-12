import dotenv from "dotenv";
import express from "express";
import config from "config";
import connectDb from "./utils/connectDb";
import log from "./utils/logger";

const app = express();

const port = config.get("port");

dotenv.config();

app.listen(port, () => {
  log.info(`App Started at http://localhost:${port}`);
  connectDb();
});
