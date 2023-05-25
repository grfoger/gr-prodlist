import { Types } from "mongoose";
import { Item } from "@/core/prodlist/domain-model/ProductListAgregate/item-vo";

export class ProductList {
  readonly id: Types.ObjectId;

  private list: Map<Types.ObjectId, Item>;

  private completeList: Array<Item>;

  private constructor(
    id: Types.ObjectId,
    list: Map<Types.ObjectId, Item>,
    completeList: Array<Item>
  ) {
    this.id = id;
    this.list = list;
    this.completeList = completeList;
  }

  public addTask(name: string, color?: string) {
    const item = Item.getNew(name, color);
    this.list.set(item.id, item);
    return item.id;
  }

  public updateTask() {
    const some = "";
  }

  public deleteTask() {
    const some = "";
  }

  public completeTask(id: Types.ObjectId) {
    const item = this.list.get(id);
    this.list.delete(id);
    item.setCompleteStatus();
    this.completeList.push(item);
  }

  public clearCompleteList() {
    this.completeList = [];
  }
}
