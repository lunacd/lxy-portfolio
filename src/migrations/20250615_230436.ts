import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "global_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"author" jsonb NOT NULL,
  	"avatar_id" integer NOT NULL,
  	"color" varchar NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "global_testimonials" ADD CONSTRAINT "global_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_testimonials" ADD CONSTRAINT "global_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "global_testimonials_order_idx" ON "global_testimonials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "global_testimonials_parent_id_idx" ON "global_testimonials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "global_testimonials_avatar_idx" ON "global_testimonials" USING btree ("avatar_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "global_testimonials" CASCADE;`)
}
