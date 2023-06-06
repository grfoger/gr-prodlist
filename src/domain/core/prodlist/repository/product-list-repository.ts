import { Injectable } from "@nestjs/common";
import { Types } from "mongoose";
import { ProductList } from "@core/prodlist/domain-model/ProductListAgregate/product-list-core";
import { Item } from "@core/prodlist/domain-model/ProductListAgregate/item";
import { IllegalArgumentError } from "@support/errors/errors";

@Injectable()
export class ProductListRepository {
  private store: Map<string, ProductList> = new Map();

  public saveTask(id, item) {
    let prodlist = this.store.get(id);
    if (!prodlist) {
      const newId = new Types.ObjectId().toString();
      prodlist = new ProductList(newId, new Map<string, Item>(), []);
      this.store.set(newId, prodlist);
    }
    prodlist.addTask(item.name);
  }

  public getById(id) {
    return this.store.get(id);
  }

  public update(id, prodList: ProductList) {
    if (!this.getById(id))
      throw new IllegalArgumentError("list not exist for update");
    this.store.set(id, prodList);
    return prodList;
  }

  public delete(id) {
    const prodList = this.getById(id);
    this.store.delete(id);
    return prodList;
  }
}
