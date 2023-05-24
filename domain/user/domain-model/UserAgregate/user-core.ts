import { Types } from "mongoose";

export class ProductList {
  private id: Types.ObjectId;

  private list: Array<Item>;

  private constructor(id: Types.ObjectId, list: Array<Item>) {
    this.id = id;
    this.list = list;
  }
}
