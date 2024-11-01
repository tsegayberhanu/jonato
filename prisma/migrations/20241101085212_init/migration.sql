-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "telegramId" INTEGER NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "username" TEXT,
    "languageCode" TEXT,
    "isBot" BOOLEAN NOT NULL,
    "isPremium" BOOLEAN NOT NULL,
    "phoneNumber" TEXT,
    "currentLocation" TEXT,
    "profilePhoto" TEXT,
    "status" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_telegramId_key" ON "User"("telegramId");
