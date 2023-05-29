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
  private readonly _id: Types.ObjectId;

  private _list: Map<Types.ObjectId, Item>;

  private _completeList: Array<Item>;

  constructor(
    id: Types.ObjectId,
    list: Map<Types.ObjectId, Item>,
    completeList: Array<Item>
  ) {
    this._id = validateObjectId(id);
    //TODO: дописать валидацию на мап и массив
    //TODO: удалить в доменной модели привязку к id mongo
    this._list = list;
    this._completeList = completeList;
  }

  get id(): Types.ObjectId {
    return this._id;
  }

  get list(): Map<Types.ObjectId, Item> {
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

  public changeNameTask(id: Types.ObjectId, newName: string) {
    validateObjectId(id);
    validateNotNullOrEmptyString(newName);

    const item = this._list.get(id);
    item.changeName(newName);
    this._list.set(id, item);
  }

  public changeColorTask(id: Types.ObjectId, newColor: Color) {
    validateObjectId(id);
    validateIsEnum(Color, newColor);

    const item = this._list.get(id);
    item.changeName(newColor);
    this._list.set(id, item);
  }

  public deleteTask(id: Types.ObjectId) {
    validateObjectId(id);

    if (!this._list.has(id)) throw new Error("Can't delete! Task not exists.");
    this._list.delete(id);
  }

  public completeTask(id: Types.ObjectId) {
    validateObjectId(id);

    const item = this._list.get(id);
    this._list.delete(id);
    item.setCompleteStatus();
    this._completeList.push(item);
  }

  public clearCompleteList() {
    this._completeList = [];
  }
}
