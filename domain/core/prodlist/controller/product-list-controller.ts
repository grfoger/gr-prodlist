import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductListService } from "@/core/prodlist/service/product-list-service";
import { CreateItemRequestDto } from "@/core/prodlist/domain-model/dto/create-item-request-dto";

@Controller("prodlist")
export class ProductListController {
  constructor(private readonly productListService: ProductListService) {}

  @Get(":id")
  getList(@Param("id") id: string) {
    return this.productListService.getList(id);
  }

  @Post(":id")
  create(@Body() item: CreateItemRequestDto, @Param("id") id: string) {
    return this.productListService.addItem(id, item);
  }
}
