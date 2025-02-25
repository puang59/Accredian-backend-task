-- CreateTable
CREATE TABLE `refTable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referrerName` VARCHAR(100) NOT NULL,
    `referrerEmail` VARCHAR(255) NOT NULL,
    `referrerPhone` CHAR(10) NOT NULL,
    `refereeName` VARCHAR(100) NOT NULL,
    `refereeEmail` VARCHAR(255) NOT NULL,
    `refereePhone` CHAR(10) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `refTable_referrerEmail_refereeEmail_key`(`referrerEmail`, `refereeEmail`),
    UNIQUE INDEX `refTable_referrerPhone_refereePhone_key`(`referrerPhone`, `refereePhone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
