import { Color } from "@/core/prodlist/domain-model/ProductListAgregate/item";
import { IsEnum, MinLength } from "class-validator";

export class CreateItemRequestDto {
  @MinLength(3)
  name: string;

  @IsEnum(Color)
  color: Color;
}
