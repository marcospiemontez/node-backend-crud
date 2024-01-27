import { DocumentFactory } from "./DocumentFactory";
import { Document } from "./Document";
import { Uuid } from "./Uuid";

export class User {
  private id: Uuid;
  private name: string;
  private email: string;
  private document: Document;
  private password: string;

  constructor(name: string, email: string, document: Document, password: string, id?: string) {
    this.id = id ? new Uuid(id) : Uuid.randomGenerator();
    this.name = name;
    this.email = email;
    this.document = document;
    this.password = password;
  }

  static create(name: string, email: string, document: string, password: string, id?: string): User {
    const documentInstance = DocumentFactory.create(document);

    return new User(name, email, documentInstance, password, id);
  }
}