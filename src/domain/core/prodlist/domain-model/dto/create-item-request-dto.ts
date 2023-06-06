import { IsEnum, MinLength } from "class-validator";
import { Color } from "@core/prodlist/domain-model/ProductListAgregate/item";

export class CreateItemRequestDto {
  @MinLength(3)
  name: string;

  @IsEnum(Color)
  color: Color;
}
