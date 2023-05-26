import { validateIsEnum } from "@/support/validation/validation.helpers";
import {
  Color,
  Item,
} from "@/core/prodlist/domain-model/ProductListAgregate/item-vo";
// пока используется как sandbox
validateIsEnum(Color, Color.GREEN);
const item = Item.getNew("task");
const item2 = Item.getNew("task");
console.log(item.constructor == Item);

