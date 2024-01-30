export class InsertProductDTO {
  constructor(
    private name: string,
    private description: string,
    private amount: string,
    private price: string,
    private release_date: Date,
    private user_id: string,
  ) {}

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getAmount(): string {
    return this.amount;
  }

  getPrice(): string {
    return this.price;
  }

  getReleaseDate(): Date {
    return this.release_date;
  }

  getUserId(): string {
    return this.user_id;
  }
}