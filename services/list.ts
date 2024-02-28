import db from "@/config/init";

const query = () => {
  return db.spot.findMany({
      select: {
        index: true,
        note: true,
        spot_menu: {
          select: {
            menu: {
              select: {
                name: true
              }
            },
            product: {
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
                }
              }
            }
          }
        }
      },
      orderBy: {
        index: 'asc'
      }
    });
};

export default query;