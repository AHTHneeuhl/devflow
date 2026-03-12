-- CreateTable
CREATE TABLE "Integration" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Integration_pkey" PRIMARY KEY ("id")
);
