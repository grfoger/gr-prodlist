import { Injectable } from "@nestjs/common";
import { ProductList } from "@/core/prodlist/domain-model/ProductListAgregate/product-list-core";
import { Types } from "mongoose";
import { Item } from "@/core/prodlist/domain-model/ProductListAgregate/item-vo";
import { CreateItemRequestDto } from "@/core/prodlist/domain-model/dto/create-item-request-dto";

@Injectable()
export class ProductListService {
  getList() {
    return [];
  }

  addItem(item: CreateItemRequestDto) {
    // переписать на синглтон или на список конкретного пользователя
    const productList = new ProductList(
      new Types.ObjectId(),
      new Map<Types.ObjectId, Item>(),
      []
    );
    productList.addTask(item.name);
  }
}
