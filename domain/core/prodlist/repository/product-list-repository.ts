import { Injectable } from "@nestjs/common";
import { Types } from "mongoose";
import { ProductList } from "@/core/prodlist/domain-model/ProductListAgregate/product-list-core";
import { IllegalArgumentError } from "@/support/errors/errors";

@Injectable()
export class ProductListRepository {
  private store: Map<Types.ObjectId, ProductList> = new Map();

  public save(prodList: ProductList) {
    prodList = new ProductList(
      new Types.ObjectId(),
      prodList.list,
      prodList.completeList
    );
    this.store.set(prodList.id, prodList);
    return prodList;
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
