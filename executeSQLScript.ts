import { MySqlConfiguration } from "./src/infra/database/MySqlConfiguration";

const sqlScriptPath = './createTables.sql';

async function runScript() {
  const mySqlConfig = new MySqlConfiguration();
  await mySqlConfig.executeSqlScript(sqlScriptPath);
}

runScript();
