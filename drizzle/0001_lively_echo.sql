ALTER TABLE `users` RENAME COLUMN `userName` TO `firstName`;--> statement-breakpoint
ALTER TABLE `users` ADD `lastName` text;--> statement-breakpoint
ALTER TABLE `users` ADD `email` text;