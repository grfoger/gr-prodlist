import { Injectable } from "@nestjs/common";
import { ProductList } from "@/core/prodlist/domain-model/ProductListAgregate/product-list-core";
import { Types } from "mongoose";
import { Item } from "@/core/prodlist/domain-model/ProductListAgregate/item";
import { CreateItemRequestDto } from "@/core/prodlist/domain-model/dto/create-item-request-dto";
import { ProductListRepository } from "@/core/prodlist/repository/product-list-repository";

@Injectable()
export class ProductListService {
  constructor(private readonly productListRepository: ProductListRepository) {}

  getList(id) {
    return this.productListRepository.getById(id).getResponse();
  }

  addItem(id, item: CreateItemRequestDto) {
    this.productListRepository.saveTask(id, item);
  }
}
