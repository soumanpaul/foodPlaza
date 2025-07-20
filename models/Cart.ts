import { MenuItem } from "../models/MenuItem"; // Adjust path as needed
import { Restaurant } from "../models/Restaurant"; // Adjust path as needed

export class Cart {
  private restaurant: Restaurant | null;
  private items: MenuItem[];

  constructor() {
    this.restaurant = null;
    this.items = [];
  }

  public addItem(item: MenuItem): void {
    if (!this.restaurant) {
      console.error("Cart: Set a restaurant before adding items.");
      return;
    }
    this.items.push(item);
  }

  public getTotalCost(): number {
    return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
  }

  public isEmpty(): boolean {
    return !this.restaurant || this.items.length === 0;
  }

  public clear(): void {
    this.items = [];
    this.restaurant = null;
  }

  // Getters and Setters
  public setRestaurant(restaurant: Restaurant | null): void {
    this.restaurant = restaurant;
  }

  public getRestaurant(): Restaurant | null {
    return this.restaurant;
  }

  public getItems(): MenuItem[] {
    return this.items;
  }
}
