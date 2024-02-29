import db from "@/config/init";
import { _product } from "@/types";

const _update = (id: string, attribute: _product) => {
  return db.product.update({
    where: {
      id
    },
    data: {
      brand: attribute.brand,
      expired_at: new Date(attribute.expired_at),
      restocked_at: new Date(attribute.restocked_at!),
      spot_menu_id: attribute.spot_menu_id
    }
  });
}

export default _update;