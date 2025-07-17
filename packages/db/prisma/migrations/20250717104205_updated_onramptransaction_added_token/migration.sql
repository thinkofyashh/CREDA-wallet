/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `OnRampTransaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `OnRampTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OnRampTransaction" ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OnRampTransaction_token_key" ON "OnRampTransaction"("token");
