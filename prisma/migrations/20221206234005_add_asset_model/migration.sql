-- CreateEnum
CREATE TYPE "ProdutCategory" AS ENUM ('laptop', 'mobilePhone', 'mobileRouter');

-- CreateEnum
CREATE TYPE "AssetStatus" AS ENUM ('active', 'inActive', 'broken', 'maintenance');

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "qrImagePath" TEXT,
    "productId" TEXT NOT NULL,
    "simId" TEXT,
    "note" TEXT,
    "status" "AssetStatus" NOT NULL,
    "buyDate" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Asset_id_key" ON "Asset"("id");

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
