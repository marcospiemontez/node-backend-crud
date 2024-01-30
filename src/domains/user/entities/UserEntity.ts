export class UserEntity {
  private id?: number;
  private name: string;
  private email: string;
  private document: string;
  private password: string;
  private is_active: boolean;
  private created_at: Date;
  private updated_at: Date;

  constructor(id: number, name: string, email: string, document: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.document = document;
    this.password = password;
    this.is_active = true;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  getId(): number | undefined {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getDocument(): string {
    return this.document;
  }

  getPassword(): string {
    return this.password;
  }

  getIsActive(): boolean {
    return this.is_active;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }

  getUpdatedAt(): Date {
    return this.updated_at;
  }
}
