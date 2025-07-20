import { Cart } from "./Cart"; // Assuming Cart is defined in a separate file

export class User {
  private userId: number;
  private name: string;
  private address: string;
  private cart: Cart;

  constructor(userId: number, name: string, address: string) {
    this.userId = userId;
    this.name = name;
    this.address = address;
    this.cart = new Cart();
  }

  // In TypeScript, we don't need explicit destructor as garbage collection is automatic

  // Getters
  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public getCart(): Cart {
    return this.cart;
  }

  // Setters
  public setName(name: string): void {
    this.name = name;
  }

  public setAddress(address: string): void {
    this.address = address;
  }
}
