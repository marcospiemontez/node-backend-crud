export class UserDTO {
  name: string
  email: string
  password: string
  document: string

  constructor(name: string, email: string, document: string, password: string) {
    this.name = name
    this.email = email
    this.document = document
    this.password = password
  }
}
