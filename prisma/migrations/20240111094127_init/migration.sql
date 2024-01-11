-- CreateTable
CREATE TABLE "Post" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
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
