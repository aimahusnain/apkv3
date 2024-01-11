/*
  Warnings:

  - You are about to alter the column `id` on the `Post` table. The data in that column will be cast from `BigInt` to `Int`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Post" (
    "id" INT4 NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "image" STRING NOT NULL,
    "category" STRING NOT NULL,
    "userid" STRING NOT NULL,
    "userimage" STRING NOT NULL,
    "comments" STRING[],
    "isFeatured" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Post" ("category","comments","description","id","image","isFeatured","title","userid","userimage") SELECT "category","comments","description","id","image","isFeatured","title","userid","userimage" FROM "Post";
DROP TABLE "Post" CASCADE;
ALTER TABLE "_prisma_new_Post" RENAME TO "Post";
