import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductListService } from "@/core/prodlist/service/product-list-service";
import { CreateItemRequestDto } from "@/core/prodlist/domain-model/dto/create-item-request-dto";

@Controller("prodlist")
export class ProductListController {
  constructor(private readonly productListService: ProductListService) {}

  @Get()
  getList() {
    return this.productListService.getList();
  }

  @Post()
  create(@Body() item: CreateItemRequestDto) {
    return this.productListService.addItem(item);
  }
}
