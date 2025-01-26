import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "project_pages_blocks_image_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_image_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  ALTER TABLE "project_pages_blocks_image_text" DROP CONSTRAINT "project_pages_blocks_image_text_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_image_text" DROP CONSTRAINT "blogs_blocks_image_text_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "project_pages_blocks_image_text_image_idx";
  DROP INDEX IF EXISTS "blogs_blocks_image_text_image_idx";
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_image_text_images" ADD CONSTRAINT "project_pages_blocks_image_text_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_image_text_images" ADD CONSTRAINT "project_pages_blocks_image_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_image_text_images" ADD CONSTRAINT "blogs_blocks_image_text_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_image_text_images" ADD CONSTRAINT "blogs_blocks_image_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_text_images_order_idx" ON "project_pages_blocks_image_text_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_text_images_parent_id_idx" ON "project_pages_blocks_image_text_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_text_images_image_idx" ON "project_pages_blocks_image_text_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_text_images_order_idx" ON "blogs_blocks_image_text_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_text_images_parent_id_idx" ON "blogs_blocks_image_text_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_text_images_image_idx" ON "blogs_blocks_image_text_images" USING btree ("image_id");
  ALTER TABLE "project_pages_blocks_image_text" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "blogs_blocks_image_text" DROP COLUMN IF EXISTS "image_id";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_image_text_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blogs_blocks_image_text_images" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "project_pages_blocks_image_text_images" CASCADE;
  DROP TABLE "blogs_blocks_image_text_images" CASCADE;
  ALTER TABLE "project_pages_blocks_image_text" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "blogs_blocks_image_text" ADD COLUMN "image_id" integer NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_image_text" ADD CONSTRAINT "project_pages_blocks_image_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_image_text" ADD CONSTRAINT "blogs_blocks_image_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_text_image_idx" ON "project_pages_blocks_image_text" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_text_image_idx" ON "blogs_blocks_image_text" USING btree ("image_id");`)
}
