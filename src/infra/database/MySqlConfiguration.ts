import { createConnection, Connection } from 'mysql2/promise';
import { DBConfiguration } from './DbConfiguration';
import { promises as fsPromises } from 'fs';

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
    if (!this.connectionPromise) {
      this.connectionPromise = createConnection({
        host: 'localhost',
        port: 3306,
        user: 'node_user',
        password: 'node_pass',
        database: 'node',
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
