import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_blogs_blocks_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_blogs_blocks_title_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_horizontal_gallery_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_horizontal_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_text_image_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_horizontal_scroll_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_column_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_column_justify" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_blogs_blocks_row_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TABLE IF NOT EXISTS "blogs_blocks_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"type" "enum_blogs_blocks_title_type" DEFAULT 'title' NOT NULL,
  	"text_color" "enum_blogs_blocks_title_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"text_color" "enum_blogs_blocks_text_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_horizontal_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"text" jsonb NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_horizontal_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_blogs_blocks_horizontal_gallery_spacing" DEFAULT 'regular' NOT NULL,
  	"text_color" "enum_blogs_blocks_horizontal_gallery_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_youtube" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"embed_link" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_document" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"document_id" integer NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"text_color" "enum_blogs_blocks_text_image_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_horizontal_scroll" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"scroll_prompt" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"text_color" "enum_blogs_blocks_horizontal_scroll_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_slide_show_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_slide_show" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_blogs_blocks_column_spacing" DEFAULT 'regular' NOT NULL,
  	"justify" "enum_blogs_blocks_column_justify" DEFAULT 'start' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_blogs_blocks_row_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "blogs_id" integer;
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_title" ADD CONSTRAINT "blogs_blocks_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_text" ADD CONSTRAINT "blogs_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_horizontal_gallery_items" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_horizontal_gallery_items" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_horizontal_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_horizontal_gallery" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_image" ADD CONSTRAINT "blogs_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_image" ADD CONSTRAINT "blogs_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_youtube" ADD CONSTRAINT "blogs_blocks_youtube_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_document" ADD CONSTRAINT "blogs_blocks_document_document_id_document_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_document" ADD CONSTRAINT "blogs_blocks_document_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_text_image" ADD CONSTRAINT "blogs_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_text_image" ADD CONSTRAINT "blogs_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_horizontal_scroll" ADD CONSTRAINT "blogs_blocks_horizontal_scroll_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_horizontal_scroll" ADD CONSTRAINT "blogs_blocks_horizontal_scroll_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_slide_show_images" ADD CONSTRAINT "blogs_blocks_slide_show_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_slide_show_images" ADD CONSTRAINT "blogs_blocks_slide_show_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_slide_show"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_slide_show" ADD CONSTRAINT "blogs_blocks_slide_show_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_column" ADD CONSTRAINT "blogs_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_row" ADD CONSTRAINT "blogs_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "blogs_blocks_title_order_idx" ON "blogs_blocks_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_title_parent_id_idx" ON "blogs_blocks_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_title_path_idx" ON "blogs_blocks_title" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_text_order_idx" ON "blogs_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_text_parent_id_idx" ON "blogs_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_text_path_idx" ON "blogs_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_items_order_idx" ON "blogs_blocks_horizontal_gallery_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_items_parent_id_idx" ON "blogs_blocks_horizontal_gallery_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_items_image_idx" ON "blogs_blocks_horizontal_gallery_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_order_idx" ON "blogs_blocks_horizontal_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_parent_id_idx" ON "blogs_blocks_horizontal_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_path_idx" ON "blogs_blocks_horizontal_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_order_idx" ON "blogs_blocks_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_parent_id_idx" ON "blogs_blocks_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_path_idx" ON "blogs_blocks_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_image_idx" ON "blogs_blocks_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_youtube_order_idx" ON "blogs_blocks_youtube" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_youtube_parent_id_idx" ON "blogs_blocks_youtube" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_youtube_path_idx" ON "blogs_blocks_youtube" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_document_order_idx" ON "blogs_blocks_document" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_document_parent_id_idx" ON "blogs_blocks_document" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_document_path_idx" ON "blogs_blocks_document" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_document_document_idx" ON "blogs_blocks_document" USING btree ("document_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_text_image_order_idx" ON "blogs_blocks_text_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_text_image_parent_id_idx" ON "blogs_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_text_image_path_idx" ON "blogs_blocks_text_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_text_image_image_idx" ON "blogs_blocks_text_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_scroll_order_idx" ON "blogs_blocks_horizontal_scroll" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_scroll_parent_id_idx" ON "blogs_blocks_horizontal_scroll" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_scroll_path_idx" ON "blogs_blocks_horizontal_scroll" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_scroll_image_idx" ON "blogs_blocks_horizontal_scroll" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_slide_show_images_order_idx" ON "blogs_blocks_slide_show_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_slide_show_images_parent_id_idx" ON "blogs_blocks_slide_show_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_slide_show_images_image_idx" ON "blogs_blocks_slide_show_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_slide_show_order_idx" ON "blogs_blocks_slide_show" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_slide_show_parent_id_idx" ON "blogs_blocks_slide_show" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_slide_show_path_idx" ON "blogs_blocks_slide_show" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_column_order_idx" ON "blogs_blocks_column" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_column_parent_id_idx" ON "blogs_blocks_column" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_column_path_idx" ON "blogs_blocks_column" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_row_order_idx" ON "blogs_blocks_row" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_row_parent_id_idx" ON "blogs_blocks_row" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_row_path_idx" ON "blogs_blocks_row" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_updated_at_idx" ON "blogs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blogs_created_at_idx" ON "blogs" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("blogs_id");`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "blogs_blocks_title";
  DROP TABLE "blogs_blocks_text";
  DROP TABLE "blogs_blocks_horizontal_gallery_items";
  DROP TABLE "blogs_blocks_horizontal_gallery";
  DROP TABLE "blogs_blocks_image";
  DROP TABLE "blogs_blocks_youtube";
  DROP TABLE "blogs_blocks_document";
  DROP TABLE "blogs_blocks_text_image";
  DROP TABLE "blogs_blocks_horizontal_scroll";
  DROP TABLE "blogs_blocks_slide_show_images";
  DROP TABLE "blogs_blocks_slide_show";
  DROP TABLE "blogs_blocks_column";
  DROP TABLE "blogs_blocks_row";
  DROP TABLE "blogs";
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_blogs_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_blogs_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "blogs_id";
  DROP TYPE "public"."enum_blogs_blocks_title_type";
  DROP TYPE "public"."enum_blogs_blocks_title_text_color";
  DROP TYPE "public"."enum_blogs_blocks_text_text_color";
  DROP TYPE "public"."enum_blogs_blocks_horizontal_gallery_spacing";
  DROP TYPE "public"."enum_blogs_blocks_horizontal_gallery_text_color";
  DROP TYPE "public"."enum_blogs_blocks_text_image_text_color";
  DROP TYPE "public"."enum_blogs_blocks_horizontal_scroll_text_color";
  DROP TYPE "public"."enum_blogs_blocks_column_spacing";
  DROP TYPE "public"."enum_blogs_blocks_column_justify";
  DROP TYPE "public"."enum_blogs_blocks_row_spacing";`)
}
