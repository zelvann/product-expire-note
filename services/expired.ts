import db from "@/config/init";

const _expired = () => {
  return db.product.findMany({
    select: {
      brand: true,
      expired_at: true,
      variant_product: {
        select: {
          variant: {
            select: {
              contains: true
            }
          }
        }
      },
      spot_menu: {
        select: {
          spot: {
            select: {
              index: true,
            }
          }
        }
      }
    },
    orderBy: {
      expired_at: 'asc'
    }
  });
}

export default _expired;