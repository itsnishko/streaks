/*
  Warnings:

  - Made the column `description` on table `Activity` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Metric` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Record` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data` on table `Value` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Metric" ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Record" ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Value" ALTER COLUMN "data" SET NOT NULL;
