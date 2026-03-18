import { Item } from '../models/Item';

class ItemService {
  private items: Item[] = [];
  
  static items: never[];

  getAllItems(): Item[] {
    return this.items;
  }

  clearAll(): void {
    this.items = [];
  }

  addItem(name: string, description: string) : void {
    const newItem: Item = {
      id: Date.now().toString(),
      name: name,
      description: description,
    };
    this.items.push(newItem);
  }
}

export default new ItemService();