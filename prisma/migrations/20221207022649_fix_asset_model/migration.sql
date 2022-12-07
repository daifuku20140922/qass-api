/*
  Warnings:

  - The `userId` column on the `Asset` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Asset" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER;
