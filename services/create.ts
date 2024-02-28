import db from "@/config/init";
import {_product} from "@/types";

const _create = (attribute: _product) : Promise<any> => {
  return db.product.create({
    data: {
      id: attribute.id,
      brand: attribute.brand,
      expired_at: new Date(attribute.expired_at),
      spot_menu_id: attribute.spot_menu_id
    }
  });
}

export default _create;