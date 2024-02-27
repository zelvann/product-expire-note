-- CreateTable
CREATE TABLE "variant" (
    "id" CHAR(4) NOT NULL,
    "contains" VARCHAR(255) NOT NULL,
    "product_id" CHAR(4) NOT NULL,

    CONSTRAINT "variant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" CHAR(4) NOT NULL,
    "brand" VARCHAR(255) NOT NULL,
    "restocked_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expired_at" DATE NOT NULL,
    "label_id" CHAR(4) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "label" (
    "id" CHAR(4) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "spot_id" CHAR(4) NOT NULL,

    CONSTRAINT "label_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spot" (
    "id" CHAR(4) NOT NULL,
    "index" INTEGER NOT NULL,
    "note" TEXT,

    CONSTRAINT "spot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "spot_index_key" ON "spot"("index");

-- AddForeignKey
ALTER TABLE "variant" ADD CONSTRAINT "variant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_label_id_fkey" FOREIGN KEY ("label_id") REFERENCES "label"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "label" ADD CONSTRAINT "label_spot_id_fkey" FOREIGN KEY ("spot_id") REFERENCES "spot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
