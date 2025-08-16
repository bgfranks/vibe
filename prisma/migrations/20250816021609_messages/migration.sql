/*
  Warnings:

  - You are about to drop the column `udpatedAt` on the `Fragment` table. All the data in the column will be lost.
  - You are about to drop the column `udpatedAt` on the `Message` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Fragment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fragment" DROP COLUMN "udpatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "udpatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
