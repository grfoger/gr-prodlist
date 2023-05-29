import { validateIsEnum } from "@/support/validation/validation.helpers";
import {
  Color,
  Item,
} from "@/core/prodlist/domain-model/ProductListAgregate/item-vo";
// пока используется как sandbox
const map = new Map();
map.set(1, "11");
map.set(1, "222");
console.log(map.get(1));


