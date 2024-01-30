export class CreateUserDTO {
  constructor(
    private name: string,
    private email: string,
    private document: string,
    private password: string
  ) {}

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
}
