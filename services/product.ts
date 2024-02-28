import db from "@/config/init";

const product_variant = (id: string) => {
  return db.product.findMany({
      where: {
        id
      },
      select: {
        brand: true,
        restocked_at: true,
        expired_at: true,
        variant_product: {
          select: {
            variant: {
              select: {
                contains: true
              }
            }
          }
        }
      },
  });
}

export default product_variant;