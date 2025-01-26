import { Connection, Request as TediousRequest } from 'tedious';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToDB } from './config/database';

const readSQLFile = (filePath: string): string => {
  return fs.readFileSync(filePath, 'utf-8');
};

const executeSQLFiles = async (connection: Connection, scriptsFolderPath: string): Promise<void> => {
  const files: string[] = fs.readdirSync(scriptsFolderPath).filter((file: string) => file.endsWith('.sql'));
  let index: number = 0;

  const executeNext = (): void => {
    if (index < files.length) {
      const filePath: string = path.join(scriptsFolderPath, files[index]);
      const sql: string = readSQLFile(filePath);
      const request: TediousRequest = new TediousRequest(sql, (err: Error | null | undefined) => {
        if (err) {
          console.error(`❌ Error executing file ${files[index]}:`, err);
          connection.close();
          return;
        }
        console.log(`✅ Successfully executed ${files[index]}`);
        index++;
        executeNext();
      });
      connection.execSql(request);
    } else {
      console.log('✅ All SQL files executed successfully!');
      connection.close();
    }
  };

  executeNext();
};

const getScriptsFolderPath = (): string => {
  const __filename: string = fileURLToPath(import.meta.url);
  const __dirname: string = path.dirname(__filename);
  return path.resolve(__dirname, 'scripts');
};

// Establish connection and execute SQL files
const folderPath: string = getScriptsFolderPath();

connectToDB(async (connection: Connection) => {
  await executeSQLFiles(connection, folderPath);
});