import { SQLQueries } from './SQLQueries';

export class SQLUserQueries extends SQLQueries {
  constructor() {
    super({
      create: "INSERT INTO users (name, email, password, document) VALUES (?, ?, ?)",
      delete: "DELETE FROM users WHERE id = ?",
      findAll: "SELECT * FROM users",
      findById: "SELECT * FROM users WHERE id = ?",
      update: "UPDATE users SET name = ?, password = ? WHERE id = ?",
      findByEmail: "SELECT * FROM users WHERE email = ?",
      findByIdAndEmail: "SELECT * FROM users WHERE id = ? AND email = ?",
    });
  }
}
