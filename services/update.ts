import db from "@/config/init";

const _update = (id : string) => {
  return db.product.update({
    where: {
      id
    },
    data: {
      brand: 'changed'
    }
  });
}

export default _update;