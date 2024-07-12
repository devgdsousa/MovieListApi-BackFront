/*
  Warnings:

  - You are about to drop the column `director` on the `Filme` table. All the data in the column will be lost.
  - You are about to drop the column `duration_minutes` on the `Filme` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Filme` table. All the data in the column will be lost.
  - You are about to drop the column `release_year` on the `Filme` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Filme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `describe` to the `Filme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageURL` to the `Filme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time_minutes` to the `Filme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Filme" DROP COLUMN "director",
DROP COLUMN "duration_minutes",
DROP COLUMN "genre",
DROP COLUMN "release_year",
ADD COLUMN     "amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "describe" TEXT NOT NULL,
ADD COLUMN     "imageURL" TEXT NOT NULL,
ADD COLUMN     "time_minutes" INTEGER NOT NULL;
