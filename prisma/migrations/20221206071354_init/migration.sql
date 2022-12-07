-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('enrolled', 'retired', 'suspended');

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "qrImagePath" TEXT,
    "department" TEXT,
    "name" TEXT NOT NULL,
    "status" "UserStatus" NOT NULL DEFAULT 'enrolled',
    "password" TEXT NOT NULL DEFAULT 'everlife',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "maker" TEXT,
    "imagePath" TEXT,
    "model" TEXT,
    "note" TEXT,
    "category" TEXT NOT NULL,
    "accessories" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_qrImagePath_key" ON "User"("qrImagePath");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
