export class SQLQueries {
  readonly create: string;
  readonly delete: string;
  readonly findAll: string;
  readonly findById: string;
  readonly update: string;
  readonly findByEmail?: string;
  readonly findByIdAndEmail?: string;

  constructor({
    create,
    delete: del,
    findAll,
    findById,
    update,
    findByEmail,
    findByIdAndEmail,
  }: {
    create: string;
    delete: string;
    findAll: string;
    findById: string;
    update: string;
    findByEmail?: string;
    findByIdAndEmail?: string;
  }) {
    this.create = create;
    this.delete = del;
    this.findAll = findAll;
    this.findById = findById;
    this.update = update;
    this.findByEmail = findByEmail;
    this.findByIdAndEmail = findByIdAndEmail;
  }
}
