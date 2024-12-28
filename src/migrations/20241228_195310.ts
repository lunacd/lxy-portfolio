import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_equal_height_images_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_equal_height_images_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_equal_height_images_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 50 NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_equal_height_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_project_pages_blocks_equal_height_images_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_small_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"text" jsonb NOT NULL,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_small_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_equal_height_images_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 50 NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_equal_height_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_blogs_blocks_equal_height_images_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_equal_height_images_items" ADD CONSTRAINT "project_pages_blocks_equal_height_images_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_equal_height_images_items" ADD CONSTRAINT "project_pages_blocks_equal_height_images_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_equal_height_images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_equal_height_images" ADD CONSTRAINT "project_pages_blocks_equal_height_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_small_gallery_items" ADD CONSTRAINT "blogs_blocks_small_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_small_gallery_items" ADD CONSTRAINT "blogs_blocks_small_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_small_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_small_gallery" ADD CONSTRAINT "blogs_blocks_small_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_equal_height_images_items" ADD CONSTRAINT "blogs_blocks_equal_height_images_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_equal_height_images_items" ADD CONSTRAINT "blogs_blocks_equal_height_images_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_equal_height_images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_equal_height_images" ADD CONSTRAINT "blogs_blocks_equal_height_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_equal_height_images_items_order_idx" ON "project_pages_blocks_equal_height_images_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_equal_height_images_items_parent_id_idx" ON "project_pages_blocks_equal_height_images_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_equal_height_images_items_image_idx" ON "project_pages_blocks_equal_height_images_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_equal_height_images_order_idx" ON "project_pages_blocks_equal_height_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_equal_height_images_parent_id_idx" ON "project_pages_blocks_equal_height_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_equal_height_images_path_idx" ON "project_pages_blocks_equal_height_images" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_small_gallery_items_order_idx" ON "blogs_blocks_small_gallery_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_small_gallery_items_parent_id_idx" ON "blogs_blocks_small_gallery_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_small_gallery_items_image_idx" ON "blogs_blocks_small_gallery_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_small_gallery_order_idx" ON "blogs_blocks_small_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_small_gallery_parent_id_idx" ON "blogs_blocks_small_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_small_gallery_path_idx" ON "blogs_blocks_small_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_equal_height_images_items_order_idx" ON "blogs_blocks_equal_height_images_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_equal_height_images_items_parent_id_idx" ON "blogs_blocks_equal_height_images_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_equal_height_images_items_image_idx" ON "blogs_blocks_equal_height_images_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_equal_height_images_order_idx" ON "blogs_blocks_equal_height_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_equal_height_images_parent_id_idx" ON "blogs_blocks_equal_height_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_equal_height_images_path_idx" ON "blogs_blocks_equal_height_images" USING btree ("_path");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "project_pages_blocks_equal_height_images_items" CASCADE;
  DROP TABLE "project_pages_blocks_equal_height_images" CASCADE;
  DROP TABLE "blogs_blocks_small_gallery_items" CASCADE;
  DROP TABLE "blogs_blocks_small_gallery" CASCADE;
  DROP TABLE "blogs_blocks_equal_height_images_items" CASCADE;
  DROP TABLE "blogs_blocks_equal_height_images" CASCADE;
  DROP TYPE "public"."enum_project_pages_blocks_equal_height_images_spacing";
  DROP TYPE "public"."enum_blogs_blocks_equal_height_images_spacing";`)
}
