-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "operator" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "entityIdType" TEXT NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "operator" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "entityIdType" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);
