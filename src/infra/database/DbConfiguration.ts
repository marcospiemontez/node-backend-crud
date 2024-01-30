import { Connection } from 'mysql2/promise';

export abstract class DBConfiguration {
  abstract createConnection(): Promise<Connection>;

  abstract get connection(): Promise<Connection>;

  abstract execQuery(sql: string, params?: any[]): Promise<any>;
}
