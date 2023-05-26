import { Types } from "mongoose";
import { Item } from "@/core/prodlist/domain-model/ProductListAgregate/item-vo";

export class ProductList {
  private id: Types.ObjectId;

  private list: Array<Item>;

  private constructor(id: Types.ObjectId, list: Array<Item>) {
    this.id = id;
    this.list = list;
  }
}
