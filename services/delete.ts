import db from "@/config/init";

const _delete = (id: string) => {
  return db.product.deleteMany({
    where: {
      id
    }
  });
}

export default _delete;