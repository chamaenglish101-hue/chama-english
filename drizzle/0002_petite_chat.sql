ALTER TABLE "subscriptions" ADD COLUMN "pix_period_end" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD COLUMN "last_pix_session_id" text;