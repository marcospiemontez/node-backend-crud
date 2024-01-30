export class ProductEntity {
  private id?: string;
  private name: string;
  private description: string;
  private amount: string;
  private price: string;
  private created_at?: Date;
  private updated_at?: Date;
  private user_id: string;

  constructor(name: string, description: string, amount: string, price: string, user_id: string) {
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.price = price;
    this.user_id = user_id;
  }

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

  getUserId(): string {
    return this.user_id;
  }
}