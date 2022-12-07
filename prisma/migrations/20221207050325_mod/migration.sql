-- AlterTable
ALTER TABLE "Asset" ALTER COLUMN "status" SET DEFAULT 'inActive';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP DEFAULT;
