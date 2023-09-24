CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`bio` text NOT NULL,
	`image` text NOT NULL,
	`password` text NOT NULL,
	`username` text NOT NULL,
	`created_at` text DEFAULT CURRENT_DATE,
	`updated_at` text DEFAULT CURRENT_DATE
);
