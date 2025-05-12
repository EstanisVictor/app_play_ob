import { Pool } from "pg";
import config from "config";
import log from "./logger";

async function connectDb() {
  const dbUri = config.get<string>("db");

  const poll = new Pool({
    connectionString: dbUri,
  });

  try {
    await poll.connect();
    log.info("Connecting to DB");
  } catch (err) {
    log.error("Erro na conexão com o banco:", err);
    process.exit();
  }
}

export default connectDb;
