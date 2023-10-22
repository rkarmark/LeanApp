CREATE TABLE `users` (
	`userId` varchar(36) NOT NULL,
	`userName` text,
	`userImage` text,
	CONSTRAINT `users_userId` PRIMARY KEY(`userId`)
);
