import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_large_gallery_rows_type" AS ENUM('equalWidth', 'equalHeight');
  CREATE TYPE "public"."enum_blogs_blocks_large_gallery_rows_type" AS ENUM('equalWidth', 'equalHeight');
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_large_gallery_rows_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_large_gallery_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_project_pages_blocks_large_gallery_rows_type" DEFAULT 'equalWidth' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_large_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_large_gallery_rows_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_large_gallery_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_blogs_blocks_large_gallery_rows_type" DEFAULT 'equalWidth' NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_large_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_large_gallery_rows_images" ADD CONSTRAINT "project_pages_blocks_large_gallery_rows_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_large_gallery_rows_images" ADD CONSTRAINT "project_pages_blocks_large_gallery_rows_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_large_gallery_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_large_gallery_rows" ADD CONSTRAINT "project_pages_blocks_large_gallery_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_large_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_large_gallery" ADD CONSTRAINT "project_pages_blocks_large_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_large_gallery_rows_images" ADD CONSTRAINT "blogs_blocks_large_gallery_rows_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_large_gallery_rows_images" ADD CONSTRAINT "blogs_blocks_large_gallery_rows_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_large_gallery_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_large_gallery_rows" ADD CONSTRAINT "blogs_blocks_large_gallery_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_large_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_large_gallery" ADD CONSTRAINT "blogs_blocks_large_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_large_gallery_rows_images_order_idx" ON "project_pages_blocks_large_gallery_rows_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_large_gallery_rows_images_parent_id_idx" ON "project_pages_blocks_large_gallery_rows_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_large_gallery_rows_images_image_idx" ON "project_pages_blocks_large_gallery_rows_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_large_gallery_rows_order_idx" ON "project_pages_blocks_large_gallery_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_large_gallery_rows_parent_id_idx" ON "project_pages_blocks_large_gallery_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_large_gallery_order_idx" ON "project_pages_blocks_large_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_large_gallery_parent_id_idx" ON "project_pages_blocks_large_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_large_gallery_path_idx" ON "project_pages_blocks_large_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_large_gallery_rows_images_order_idx" ON "blogs_blocks_large_gallery_rows_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_large_gallery_rows_images_parent_id_idx" ON "blogs_blocks_large_gallery_rows_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_large_gallery_rows_images_image_idx" ON "blogs_blocks_large_gallery_rows_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_large_gallery_rows_order_idx" ON "blogs_blocks_large_gallery_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_large_gallery_rows_parent_id_idx" ON "blogs_blocks_large_gallery_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_large_gallery_order_idx" ON "blogs_blocks_large_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_large_gallery_parent_id_idx" ON "blogs_blocks_large_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_large_gallery_path_idx" ON "blogs_blocks_large_gallery" USING btree ("_path");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "project_pages_blocks_large_gallery_rows_images" CASCADE;
  DROP TABLE "project_pages_blocks_large_gallery_rows" CASCADE;
  DROP TABLE "project_pages_blocks_large_gallery" CASCADE;
  DROP TABLE "blogs_blocks_large_gallery_rows_images" CASCADE;
  DROP TABLE "blogs_blocks_large_gallery_rows" CASCADE;
  DROP TABLE "blogs_blocks_large_gallery" CASCADE;
  DROP TYPE "public"."enum_project_pages_blocks_large_gallery_rows_type";
  DROP TYPE "public"."enum_blogs_blocks_large_gallery_rows_type";`)
}
