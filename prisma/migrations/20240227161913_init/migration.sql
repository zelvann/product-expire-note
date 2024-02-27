-- CreateTable
CREATE TABLE "variant" (
    "id" CHAR(4) NOT NULL,
    "contains" VARCHAR(20) NOT NULL,

    CONSTRAINT "variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "variant_product" (
    "id" CHAR(5) NOT NULL,
    "product_id" CHAR(4) NOT NULL,
    "variant_id" CHAR(4) NOT NULL,

    CONSTRAINT "variant_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" CHAR(4) NOT NULL,
    "brand" VARCHAR(50) NOT NULL,
    "restocked_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expired_at" DATE NOT NULL,
    "spot_menu_id" CHAR(5) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu" (
    "id" CHAR(4) NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spot_menu" (
    "id" CHAR(5) NOT NULL,
    "spot_id" CHAR(4) NOT NULL,
    "menu_id" CHAR(4) NOT NULL,

    CONSTRAINT "spot_menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spot" (
    "id" CHAR(4) NOT NULL,
    "index" INTEGER NOT NULL,
    "note" TEXT,

    CONSTRAINT "spot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "variant_product" ADD CONSTRAINT "variant_product_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variant_product" ADD CONSTRAINT "variant_product_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_spot_menu_id_fkey" FOREIGN KEY ("spot_menu_id") REFERENCES "spot_menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spot_menu" ADD CONSTRAINT "spot_menu_spot_id_fkey" FOREIGN KEY ("spot_id") REFERENCES "spot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spot_menu" ADD CONSTRAINT "spot_menu_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
