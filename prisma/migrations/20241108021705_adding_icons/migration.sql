/*
  Warnings:

  - Added the required column `icon` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `SoftSkill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Activity" ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SoftSkill" ADD COLUMN     "icon" TEXT NOT NULL;
