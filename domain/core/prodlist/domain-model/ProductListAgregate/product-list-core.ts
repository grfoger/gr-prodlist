import {
  Color,
  Item,
} from "@/core/prodlist/domain-model/ProductListAgregate/item";
import {
  validateIsEnum,
  validateNotNullOrEmptyString,
} from "@/support/validation/validation.helpers";

export class ProductList {
  private readonly _id: string;

  private _list: Map<string, Item>;

  private _completeList: Array<Item>;

  constructor(id: string, list: Map<string, Item>, completeList: Array<Item>) {
    this._id = id;
    //TODO: дописать валидацию на мап и массив
    this._list = list;
    this._completeList = completeList;
  }

  get id(): string {
    return this._id;
  }

  get list(): Map<string, Item> {
    return this._list;
  }

  get completeList(): Array<Item> {
    return this._completeList;
  }

  public addTask(name: string, color?: string) {
    validateNotNullOrEmptyString(name);

    const item = Item.getNew(name, color);
    this._list.set(item.id, item);
    return item.id;
  }

  public changeNameTask(id: string, newName: string) {
    validateNotNullOrEmptyString(newName);

    const item = this._list.get(id);
    item.changeName(newName);
    this._list.set(id, item);
  }

  public changeColorTask(id: string, newColor: Color) {
    validateIsEnum(Color, newColor);

    const item = this._list.get(id);
    item.changeName(newColor);
    this._list.set(id, item);
  }

  public deleteTask(id: string) {
    if (!this._list.has(id)) throw new Error("Can't delete! Task not exists.");
    this._list.delete(id);
  }

  public completeTask(id: string) {
    const item = this._list.get(id);
    this._list.delete(id);
    item.setCompleteStatus();
    this._completeList.push(item);
  }

  public clearCompleteList() {
    this._completeList = [];
  }
}
