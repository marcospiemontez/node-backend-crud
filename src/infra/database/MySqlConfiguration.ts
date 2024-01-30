import { createConnection, Connection } from 'mysql2/promise';
import { DBConfiguration } from './DbConfiguration';
import { promises as fsPromises } from 'fs';
import dotenv from 'dotenv';

dotenv.config();
export class MySqlConfiguration implements DBConfiguration {
  private connectionPromise: Promise<Connection> | undefined;

  async executeSqlScript(filePath: string): Promise<void> {
    try {
      const sqlScript = await fsPromises.readFile(filePath, 'utf-8');
      const connection = await this.createConnection();
      await connection.query(sqlScript);
      await connection.end();
      console.log('SQL script executed successfully.');
    } catch (error) {
      console.error('Error executing SQL script:', error);
    }
  }

  async createConnection(): Promise<Connection> {
    const port = process.env.SERVER_PORT as string;
    if (!this.connectionPromise) {
      this.connectionPromise = createConnection({
        host: process.env.SERVER_HOST,
        port: Number(port),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
    }
    return this.connectionPromise;
  }

  get connection(): Promise<Connection> {
    return this.createConnection();
  }

  async execQuery(sql: string, params: any[] = []): Promise<any> {
    const connection = await this.createConnection();
    return connection.query(sql, params);
  }
}
