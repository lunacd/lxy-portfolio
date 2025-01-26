import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_carousel_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_project_pages_blocks_carousel_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_carousel_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_carousel_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_carousel_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text_color" "enum_project_pages_blocks_carousel_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_project_pages_blocks_carousel_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_carousel_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text_color" "enum_blogs_blocks_carousel_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_blogs_blocks_carousel_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_carousel_items" ADD CONSTRAINT "project_pages_blocks_carousel_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_carousel_items" ADD CONSTRAINT "project_pages_blocks_carousel_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_carousel" ADD CONSTRAINT "project_pages_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_carousel_items" ADD CONSTRAINT "blogs_blocks_carousel_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_carousel_items" ADD CONSTRAINT "blogs_blocks_carousel_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_carousel" ADD CONSTRAINT "blogs_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_carousel_items_order_idx" ON "project_pages_blocks_carousel_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_carousel_items_parent_id_idx" ON "project_pages_blocks_carousel_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_carousel_items_image_idx" ON "project_pages_blocks_carousel_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_carousel_order_idx" ON "project_pages_blocks_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_carousel_parent_id_idx" ON "project_pages_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_carousel_path_idx" ON "project_pages_blocks_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_carousel_items_order_idx" ON "blogs_blocks_carousel_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_carousel_items_parent_id_idx" ON "blogs_blocks_carousel_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_carousel_items_image_idx" ON "blogs_blocks_carousel_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_carousel_order_idx" ON "blogs_blocks_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_carousel_parent_id_idx" ON "blogs_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_carousel_path_idx" ON "blogs_blocks_carousel" USING btree ("_path");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "project_pages_blocks_carousel_items" CASCADE;
  DROP TABLE "project_pages_blocks_carousel" CASCADE;
  DROP TABLE "blogs_blocks_carousel_items" CASCADE;
  DROP TABLE "blogs_blocks_carousel" CASCADE;
  DROP TYPE "public"."enum_project_pages_blocks_carousel_text_color";
  DROP TYPE "public"."enum_project_pages_blocks_carousel_bottom_margin";
  DROP TYPE "public"."enum_blogs_blocks_carousel_text_color";
  DROP TYPE "public"."enum_blogs_blocks_carousel_bottom_margin";`)
}
