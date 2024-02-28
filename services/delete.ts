import db from "@/config/init";

const _delete = async() => {
  return db.product.deleteMany({
    where: {
      restocked_at: new Date('2024-02-28')
    }
  });
}

export default _delete;