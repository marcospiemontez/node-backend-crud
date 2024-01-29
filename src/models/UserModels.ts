export class UserModel {
  private id?: string;
  private name?: string;
  private email?: string;
  private document?: string;
  private password?: string;
  private is_active?: boolean | null;
  private created_at?: Date;
  private updated_at?: Date;

  constructor({
    name,
    email,
    document,
    password,
  }: {
    name: string;
    email: string;
    document: string;
    password: string;
  }) {
    this.name = name;
    this.email = email;
    this.document = document;
    this.password = password;
  }
}
