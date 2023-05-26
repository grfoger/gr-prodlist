import { Types } from "mongoose";
import {
  Color,
  Item,
} from "@/core/prodlist/domain-model/ProductListAgregate/item-vo";
import {
  validateIsEnum,
  validateNotNullOrEmptyString,
  validateObjectId,
} from "@/support/validation/validation.helpers";

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
    validateNotNullOrEmptyString(name);

    const item = Item.getNew(name, color);
    this.list.set(item.id, item);
    return item.id;
  }

  public changeNameTask(id: Types.ObjectId, newName: string) {
    validateObjectId(id);
    validateNotNullOrEmptyString(newName);

    const item = this.list.get(id);
    item.changeName(newName);
    this.list.set(id, item);
  }

  public changeColorTask(id: Types.ObjectId, newColor: Color) {
    validateObjectId(id);
    validateIsEnum(Color, newColor);

    const item = this.list.get(id);
    item.changeName(newColor);
    this.list.set(id, item);
  }

  public deleteTask(id: Types.ObjectId) {
    validateObjectId(id);

    if (!this.list.has(id)) throw new Error("Can't delete! Task not exists.");
    this.list.delete(id);
  }

  public completeTask(id: Types.ObjectId) {
    validateObjectId(id);

    const item = this.list.get(id);
    this.list.delete(id);
    item.setCompleteStatus();
    this.completeList.push(item);
  }

  public clearCompleteList() {
    this.completeList = [];
  }
}
