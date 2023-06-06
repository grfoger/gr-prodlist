import { Injectable } from "@nestjs/common";
import { CreateItemRequestDto } from "@core/prodlist/domain-model/dto/create-item-request-dto";
import { ProductListRepository } from "@core/prodlist/repository/product-list-repository";

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
