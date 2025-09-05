import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_all_blogs_blocks_title_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_all_blogs_blocks_title_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_title_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_horizontal_gallery_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_horizontal_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_horizontal_gallery_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_image_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_youtube_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_document_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_text_image_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_all_blogs_blocks_text_image_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_text_image_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_horizontal_scroll_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_horizontal_scroll_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_slide_show_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_small_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_small_gallery_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_equal_height_images_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_equal_height_images_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_image_with_text_overlay_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_image_with_text_overlay_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_image_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_image_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_carousel_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_carousel_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_button_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_embed_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_testimonial_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_emphasis_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_emphasis_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_column_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_column_justify" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_all_blogs_blocks_column_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_row_2_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_row_2_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_row_2_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_all_blogs_blocks_row_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_row_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_all_blogs_blocks_row_alignment" AS ENUM('start', 'center', 'end');
  CREATE TABLE "all_blogs_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  INSERT INTO "all_blogs_tags" ("_order", "_parent_id", "id", "value")
  SELECT "_order", "_parent_id", "id", "value" FROM "uiux_blogs_tags";
  
  CREATE TABLE "all_blogs_blocks_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"title_type" "enum_all_blogs_blocks_title_title_type" DEFAULT 'title' NOT NULL,
  	"text_color" "enum_all_blogs_blocks_title_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_title_bottom_margin" DEFAULT 'large' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_title" ("_order", "_parent_id", "_path", "id", "text", "title_type", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text",
    "title_type"::TEXT::"enum_all_blogs_blocks_title_title_type",
    "text_color"::TEXT::"enum_all_blogs_blocks_title_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_title_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_title";
  
  CREATE TABLE "all_blogs_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"text_color" "enum_all_blogs_blocks_text_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_text" ("_order", "_parent_id", "_path", "id", "text", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text",
    "text_color"::TEXT::"enum_all_blogs_blocks_text_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_text_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_text";
  
  CREATE TABLE "all_blogs_blocks_horizontal_gallery_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "all_blogs_blocks_horizontal_gallery_items_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id" FROM "uiux_blogs_blocks_horizontal_gallery_items_images";
  
  CREATE TABLE "all_blogs_blocks_horizontal_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb
  );
  INSERT INTO "all_blogs_blocks_horizontal_gallery_items" ("_order", "_parent_id", "id", "text")
  SELECT "_order", "_parent_id", "id", "text" FROM "uiux_blogs_blocks_horizontal_gallery_items";
  
  CREATE TABLE "all_blogs_blocks_horizontal_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_all_blogs_blocks_horizontal_gallery_spacing" DEFAULT 'regular' NOT NULL,
  	"text_color" "enum_all_blogs_blocks_horizontal_gallery_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_horizontal_gallery_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_horizontal_gallery" ("_order", "_parent_id", "_path", "id", "spacing", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id",
    "spacing"::TEXT::"enum_all_blogs_blocks_horizontal_gallery_spacing",
    "text_color"::TEXT::"enum_all_blogs_blocks_horizontal_gallery_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_horizontal_gallery_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_horizontal_gallery";
  
  CREATE TABLE "all_blogs_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_image_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_image" ("_order", "_parent_id", "_path", "id", "image_id", "image_size", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "image_size",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_image_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_image";
  
  CREATE TABLE "all_blogs_blocks_youtube" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"embed_link" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_youtube_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_youtube" ("_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "embed_link", "width", "height",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_youtube_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_youtube";
  
  CREATE TABLE "all_blogs_blocks_document" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"document_id" integer NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_document_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_document" ("_order", "_parent_id", "_path", "id", "label", "document_id", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "label", "document_id",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_document_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_document";
  
  CREATE TABLE "all_blogs_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"title_type" "enum_all_blogs_blocks_text_image_title_type" DEFAULT 'title' NOT NULL,
  	"text" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"text_color" "enum_all_blogs_blocks_text_image_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_text_image_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_text_image" ("_order", "_parent_id", "_path", "id", "title", "title_type", "text", "image_id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "title",
    "title_type"::TEXT::"enum_all_blogs_blocks_text_image_title_type",
    "text", "image_id",
    "text_color"::TEXT::"enum_all_blogs_blocks_text_image_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_text_image_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_text_image";
  
  CREATE TABLE "all_blogs_blocks_horizontal_scroll" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"scroll_prompt" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"text_color" "enum_all_blogs_blocks_horizontal_scroll_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_horizontal_scroll_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_horizontal_scroll" ("_order", "_parent_id", "_path", "id", "image_id", "scroll_prompt", "width", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "scroll_prompt", "width",
    "text_color"::TEXT::"enum_all_blogs_blocks_horizontal_scroll_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_horizontal_scroll_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_horizontal_scroll";
  
  CREATE TABLE "all_blogs_blocks_slide_show_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "all_blogs_blocks_slide_show_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id" FROM "uiux_blogs_blocks_slide_show_images";
  
  CREATE TABLE "all_blogs_blocks_slide_show" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_slide_show_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_slide_show" ("_order", "_parent_id", "_path", "id", "image_size", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_size",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_slide_show_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_slide_show";
  
  CREATE TABLE "all_blogs_blocks_small_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"text" jsonb NOT NULL,
  	"link" varchar
  );
  INSERT INTO "all_blogs_blocks_small_gallery_items" ("_order", "_parent_id", "id", "image_id", "text", "link")
  SELECT "_order", "_parent_id", "id", "image_id", "text", "link" FROM "uiux_blogs_blocks_small_gallery_items";
  
  CREATE TABLE "all_blogs_blocks_small_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text_color" "enum_all_blogs_blocks_small_gallery_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_small_gallery_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_small_gallery" ("_order", "_parent_id", "_path", "id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id",
    "text_color"::TEXT::"enum_all_blogs_blocks_small_gallery_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_small_gallery_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_small_gallery";
  
  CREATE TABLE "all_blogs_blocks_equal_height_images_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "all_blogs_blocks_equal_height_images_items_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id" FROM "uiux_blogs_blocks_equal_height_images_items_images";
  
  CREATE TABLE "all_blogs_blocks_equal_height_images_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_size" numeric DEFAULT 50 NOT NULL
  );
  INSERT INTO "all_blogs_blocks_equal_height_images_items" ("_order", "_parent_id", "id", "image_size")
  SELECT "_order", "_parent_id", "id", "image_size" FROM "uiux_blogs_blocks_equal_height_images_items";
  
  CREATE TABLE "all_blogs_blocks_equal_height_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_all_blogs_blocks_equal_height_images_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_equal_height_images_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_equal_height_images" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id",
    "spacing"::TEXT::"enum_all_blogs_blocks_equal_height_images_spacing",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_equal_height_images_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_equal_height_images";
  
  CREATE TABLE "all_blogs_blocks_image_with_text_overlay" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"text_overlay" jsonb NOT NULL,
  	"text_color" "enum_all_blogs_blocks_image_with_text_overlay_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_image_with_text_overlay_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_image_with_text_overlay" ("_order", "_parent_id", "_path", "id", "image_id", "image_size", "text_overlay", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "image_size", "text_overlay",
    "text_color"::TEXT::"enum_all_blogs_blocks_image_with_text_overlay_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_image_with_text_overlay_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_image_with_text_overlay";
  
  CREATE TABLE "all_blogs_blocks_image_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "all_blogs_blocks_image_text_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id" FROM "uiux_blogs_blocks_image_text_images";
  
  CREATE TABLE "all_blogs_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"text_color" "enum_all_blogs_blocks_image_text_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_image_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_image_text" ("_order", "_parent_id", "_path", "id", "text", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text",
    "text_color"::TEXT::"enum_all_blogs_blocks_image_text_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_image_text_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_image_text";
  
  CREATE TABLE "all_blogs_blocks_carousel_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "all_blogs_blocks_carousel_items" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id" FROM "uiux_blogs_blocks_carousel_items";
  
  CREATE TABLE "all_blogs_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text_color" "enum_all_blogs_blocks_carousel_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_carousel_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_carousel" ("_order", "_parent_id", "_path", "id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id",
    "text_color"::TEXT::"enum_all_blogs_blocks_carousel_text_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_carousel_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_carousel";
  
  CREATE TABLE "all_blogs_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"open_in_new_page" boolean DEFAULT false NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_button_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_button" ("_order", "_parent_id", "_path", "id", "label", "link", "open_in_new_page", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "label", "link", "open_in_new_page",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_button_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_button";
  
  CREATE TABLE "all_blogs_blocks_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"embed_link" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_embed_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_embed" ("_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "embed_link", "width", "height",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_embed_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_embed";
  
  CREATE TABLE "all_blogs_blocks_testimonial" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"author" jsonb NOT NULL,
  	"avatar_id" integer,
  	"color" varchar NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_testimonial_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_testimonial" ("_order", "_parent_id", "_path", "id", "content", "author", "avatar_id", "color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "content", "author", "avatar_id", "color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_testimonial_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_testimonial";
  
  CREATE TABLE "all_blogs_blocks_emphasis_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"emphasis" varchar NOT NULL,
  	"text" jsonb NOT NULL,
  	"use_background" boolean DEFAULT false NOT NULL,
  	"background_color" varchar,
  	"bottom_margin" "enum_all_blogs_blocks_emphasis_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"text_color" "enum_all_blogs_blocks_emphasis_text_text_color" DEFAULT 'dark' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_emphasis_text" ("_order", "_parent_id", "_path", "id", "emphasis", "text", "use_background", "background_color", "bottom_margin", "text_color", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "emphasis", "text", "use_background", "background_color",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_emphasis_text_bottom_margin",
    "text_color"::TEXT::"enum_all_blogs_blocks_emphasis_text_text_color",
    "block_name"
  FROM "uiux_blogs_blocks_emphasis_text";
  
  CREATE TABLE "all_blogs_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_all_blogs_blocks_column_spacing" DEFAULT 'regular' NOT NULL,
  	"justify" "enum_all_blogs_blocks_column_justify" DEFAULT 'start' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_column_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_column" ("_order", "_parent_id", "_path", "id", "spacing", "justify", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id",
    "spacing"::TEXT::"enum_all_blogs_blocks_column_spacing",
    "justify"::TEXT::"enum_all_blogs_blocks_column_justify",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_column_bottom_margin",
    "block_name"
  FROM "uiux_blogs_blocks_column";
  
  CREATE TABLE "all_blogs_blocks_row_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_all_blogs_blocks_row_2_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_row_2_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"alignment" "enum_all_blogs_blocks_row_2_alignment" DEFAULT 'start' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_row_2" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "alignment", "block_name")
  SELECT "_order", "_parent_id", "_path", "id",
    "spacing"::TEXT::"enum_all_blogs_blocks_row_2_spacing",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_row_2_bottom_margin",
    "alignment"::TEXT::"enum_all_blogs_blocks_row_2_alignment",
    "block_name"
  FROM "uiux_blogs_blocks_row_2";
  
  CREATE TABLE "all_blogs_blocks_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_all_blogs_blocks_row_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_all_blogs_blocks_row_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"alignment" "enum_all_blogs_blocks_row_alignment" DEFAULT 'start' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "all_blogs_blocks_row" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "alignment", "block_name")
  SELECT "_order", "_parent_id", "_path", "id",
    "spacing"::TEXT::"enum_all_blogs_blocks_row_spacing",
    "bottom_margin"::TEXT::"enum_all_blogs_blocks_row_bottom_margin",
    "alignment"::TEXT::"enum_all_blogs_blocks_row_alignment",
    "block_name"
  FROM "uiux_blogs_blocks_row";
  
  CREATE TABLE "all_blogs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"cover_image_id" integer NOT NULL,
  	"external_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  INSERT INTO "all_blogs" ("id", "title", "date", "cover_image_id", "external_link", "updated_at", "created_at")
  SELECT "id", "title", "date", "cover_image_id", "external_link", "updated_at", "created_at" FROM "uiux_blogs";
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "all_blogs_id" integer;
  ALTER TABLE "all_blogs_tags" ADD CONSTRAINT "all_blogs_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_title" ADD CONSTRAINT "all_blogs_blocks_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_text" ADD CONSTRAINT "all_blogs_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "all_blogs_blocks_horizontal_gallery_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "all_blogs_blocks_horizontal_gallery_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs_blocks_horizontal_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_horizontal_gallery_items" ADD CONSTRAINT "all_blogs_blocks_horizontal_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs_blocks_horizontal_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_horizontal_gallery" ADD CONSTRAINT "all_blogs_blocks_horizontal_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_image" ADD CONSTRAINT "all_blogs_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_image" ADD CONSTRAINT "all_blogs_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_youtube" ADD CONSTRAINT "all_blogs_blocks_youtube_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_document" ADD CONSTRAINT "all_blogs_blocks_document_document_id_document_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_document" ADD CONSTRAINT "all_blogs_blocks_document_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_text_image" ADD CONSTRAINT "all_blogs_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_text_image" ADD CONSTRAINT "all_blogs_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_horizontal_scroll" ADD CONSTRAINT "all_blogs_blocks_horizontal_scroll_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_horizontal_scroll" ADD CONSTRAINT "all_blogs_blocks_horizontal_scroll_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_slide_show_images" ADD CONSTRAINT "all_blogs_blocks_slide_show_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_slide_show_images" ADD CONSTRAINT "all_blogs_blocks_slide_show_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs_blocks_slide_show"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_slide_show" ADD CONSTRAINT "all_blogs_blocks_slide_show_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_small_gallery_items" ADD CONSTRAINT "all_blogs_blocks_small_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_small_gallery_items" ADD CONSTRAINT "all_blogs_blocks_small_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs_blocks_small_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_small_gallery" ADD CONSTRAINT "all_blogs_blocks_small_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "all_blogs_blocks_equal_height_images_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "all_blogs_blocks_equal_height_images_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs_blocks_equal_height_images_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_equal_height_images_items" ADD CONSTRAINT "all_blogs_blocks_equal_height_images_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs_blocks_equal_height_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_equal_height_images" ADD CONSTRAINT "all_blogs_blocks_equal_height_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "all_blogs_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "all_blogs_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_image_text_images" ADD CONSTRAINT "all_blogs_blocks_image_text_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_image_text_images" ADD CONSTRAINT "all_blogs_blocks_image_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_image_text" ADD CONSTRAINT "all_blogs_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_carousel_items" ADD CONSTRAINT "all_blogs_blocks_carousel_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_carousel_items" ADD CONSTRAINT "all_blogs_blocks_carousel_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_carousel" ADD CONSTRAINT "all_blogs_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_button" ADD CONSTRAINT "all_blogs_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_embed" ADD CONSTRAINT "all_blogs_blocks_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_testimonial" ADD CONSTRAINT "all_blogs_blocks_testimonial_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_testimonial" ADD CONSTRAINT "all_blogs_blocks_testimonial_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_emphasis_text" ADD CONSTRAINT "all_blogs_blocks_emphasis_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_column" ADD CONSTRAINT "all_blogs_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_row_2" ADD CONSTRAINT "all_blogs_blocks_row_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs_blocks_row" ADD CONSTRAINT "all_blogs_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_blogs" ADD CONSTRAINT "all_blogs_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "all_blogs_tags_order_idx" ON "all_blogs_tags" USING btree ("_order");
  CREATE INDEX "all_blogs_tags_parent_id_idx" ON "all_blogs_tags" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_title_order_idx" ON "all_blogs_blocks_title" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_title_parent_id_idx" ON "all_blogs_blocks_title" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_title_path_idx" ON "all_blogs_blocks_title" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_text_order_idx" ON "all_blogs_blocks_text" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_text_parent_id_idx" ON "all_blogs_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_text_path_idx" ON "all_blogs_blocks_text" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_horizontal_gallery_items_images_order_idx" ON "all_blogs_blocks_horizontal_gallery_items_images" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_horizontal_gallery_items_images_parent_id_idx" ON "all_blogs_blocks_horizontal_gallery_items_images" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_horizontal_gallery_items_images_image_idx" ON "all_blogs_blocks_horizontal_gallery_items_images" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_horizontal_gallery_items_order_idx" ON "all_blogs_blocks_horizontal_gallery_items" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_horizontal_gallery_items_parent_id_idx" ON "all_blogs_blocks_horizontal_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_horizontal_gallery_order_idx" ON "all_blogs_blocks_horizontal_gallery" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_horizontal_gallery_parent_id_idx" ON "all_blogs_blocks_horizontal_gallery" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_horizontal_gallery_path_idx" ON "all_blogs_blocks_horizontal_gallery" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_image_order_idx" ON "all_blogs_blocks_image" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_image_parent_id_idx" ON "all_blogs_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_image_path_idx" ON "all_blogs_blocks_image" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_image_image_idx" ON "all_blogs_blocks_image" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_youtube_order_idx" ON "all_blogs_blocks_youtube" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_youtube_parent_id_idx" ON "all_blogs_blocks_youtube" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_youtube_path_idx" ON "all_blogs_blocks_youtube" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_document_order_idx" ON "all_blogs_blocks_document" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_document_parent_id_idx" ON "all_blogs_blocks_document" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_document_path_idx" ON "all_blogs_blocks_document" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_document_document_idx" ON "all_blogs_blocks_document" USING btree ("document_id");
  CREATE INDEX "all_blogs_blocks_text_image_order_idx" ON "all_blogs_blocks_text_image" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_text_image_parent_id_idx" ON "all_blogs_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_text_image_path_idx" ON "all_blogs_blocks_text_image" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_text_image_image_idx" ON "all_blogs_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_horizontal_scroll_order_idx" ON "all_blogs_blocks_horizontal_scroll" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_horizontal_scroll_parent_id_idx" ON "all_blogs_blocks_horizontal_scroll" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_horizontal_scroll_path_idx" ON "all_blogs_blocks_horizontal_scroll" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_horizontal_scroll_image_idx" ON "all_blogs_blocks_horizontal_scroll" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_slide_show_images_order_idx" ON "all_blogs_blocks_slide_show_images" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_slide_show_images_parent_id_idx" ON "all_blogs_blocks_slide_show_images" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_slide_show_images_image_idx" ON "all_blogs_blocks_slide_show_images" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_slide_show_order_idx" ON "all_blogs_blocks_slide_show" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_slide_show_parent_id_idx" ON "all_blogs_blocks_slide_show" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_slide_show_path_idx" ON "all_blogs_blocks_slide_show" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_small_gallery_items_order_idx" ON "all_blogs_blocks_small_gallery_items" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_small_gallery_items_parent_id_idx" ON "all_blogs_blocks_small_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_small_gallery_items_image_idx" ON "all_blogs_blocks_small_gallery_items" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_small_gallery_order_idx" ON "all_blogs_blocks_small_gallery" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_small_gallery_parent_id_idx" ON "all_blogs_blocks_small_gallery" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_small_gallery_path_idx" ON "all_blogs_blocks_small_gallery" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_equal_height_images_items_images_order_idx" ON "all_blogs_blocks_equal_height_images_items_images" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_equal_height_images_items_images_parent_id_idx" ON "all_blogs_blocks_equal_height_images_items_images" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_equal_height_images_items_images_image_idx" ON "all_blogs_blocks_equal_height_images_items_images" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_equal_height_images_items_order_idx" ON "all_blogs_blocks_equal_height_images_items" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_equal_height_images_items_parent_id_idx" ON "all_blogs_blocks_equal_height_images_items" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_equal_height_images_order_idx" ON "all_blogs_blocks_equal_height_images" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_equal_height_images_parent_id_idx" ON "all_blogs_blocks_equal_height_images" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_equal_height_images_path_idx" ON "all_blogs_blocks_equal_height_images" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_image_with_text_overlay_order_idx" ON "all_blogs_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_image_with_text_overlay_parent_id_idx" ON "all_blogs_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_image_with_text_overlay_path_idx" ON "all_blogs_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_image_with_text_overlay_image_idx" ON "all_blogs_blocks_image_with_text_overlay" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_image_text_images_order_idx" ON "all_blogs_blocks_image_text_images" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_image_text_images_parent_id_idx" ON "all_blogs_blocks_image_text_images" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_image_text_images_image_idx" ON "all_blogs_blocks_image_text_images" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_image_text_order_idx" ON "all_blogs_blocks_image_text" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_image_text_parent_id_idx" ON "all_blogs_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_image_text_path_idx" ON "all_blogs_blocks_image_text" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_carousel_items_order_idx" ON "all_blogs_blocks_carousel_items" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_carousel_items_parent_id_idx" ON "all_blogs_blocks_carousel_items" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_carousel_items_image_idx" ON "all_blogs_blocks_carousel_items" USING btree ("image_id");
  CREATE INDEX "all_blogs_blocks_carousel_order_idx" ON "all_blogs_blocks_carousel" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_carousel_parent_id_idx" ON "all_blogs_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_carousel_path_idx" ON "all_blogs_blocks_carousel" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_button_order_idx" ON "all_blogs_blocks_button" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_button_parent_id_idx" ON "all_blogs_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_button_path_idx" ON "all_blogs_blocks_button" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_embed_order_idx" ON "all_blogs_blocks_embed" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_embed_parent_id_idx" ON "all_blogs_blocks_embed" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_embed_path_idx" ON "all_blogs_blocks_embed" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_testimonial_order_idx" ON "all_blogs_blocks_testimonial" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_testimonial_parent_id_idx" ON "all_blogs_blocks_testimonial" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_testimonial_path_idx" ON "all_blogs_blocks_testimonial" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_testimonial_avatar_idx" ON "all_blogs_blocks_testimonial" USING btree ("avatar_id");
  CREATE INDEX "all_blogs_blocks_emphasis_text_order_idx" ON "all_blogs_blocks_emphasis_text" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_emphasis_text_parent_id_idx" ON "all_blogs_blocks_emphasis_text" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_emphasis_text_path_idx" ON "all_blogs_blocks_emphasis_text" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_column_order_idx" ON "all_blogs_blocks_column" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_column_parent_id_idx" ON "all_blogs_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_column_path_idx" ON "all_blogs_blocks_column" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_row_2_order_idx" ON "all_blogs_blocks_row_2" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_row_2_parent_id_idx" ON "all_blogs_blocks_row_2" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_row_2_path_idx" ON "all_blogs_blocks_row_2" USING btree ("_path");
  CREATE INDEX "all_blogs_blocks_row_order_idx" ON "all_blogs_blocks_row" USING btree ("_order");
  CREATE INDEX "all_blogs_blocks_row_parent_id_idx" ON "all_blogs_blocks_row" USING btree ("_parent_id");
  CREATE INDEX "all_blogs_blocks_row_path_idx" ON "all_blogs_blocks_row" USING btree ("_path");
  CREATE INDEX "all_blogs_cover_image_idx" ON "all_blogs" USING btree ("cover_image_id");
  CREATE INDEX "all_blogs_updated_at_idx" ON "all_blogs" USING btree ("updated_at");
  CREATE INDEX "all_blogs_created_at_idx" ON "all_blogs" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_all_blogs_fk" FOREIGN KEY ("all_blogs_id") REFERENCES "public"."all_blogs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_all_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("all_blogs_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "all_blogs_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_title" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_horizontal_gallery_items_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_horizontal_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_horizontal_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_youtube" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_document" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_text_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_horizontal_scroll" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_slide_show_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_slide_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_small_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_small_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_equal_height_images_items_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_equal_height_images_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_equal_height_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_image_with_text_overlay" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_image_text_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_image_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_carousel_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_carousel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_button" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_embed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_testimonial" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_emphasis_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_column" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_row_2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs_blocks_row" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_blogs" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "all_blogs_tags" CASCADE;
  DROP TABLE "all_blogs_blocks_title" CASCADE;
  DROP TABLE "all_blogs_blocks_text" CASCADE;
  DROP TABLE "all_blogs_blocks_horizontal_gallery_items_images" CASCADE;
  DROP TABLE "all_blogs_blocks_horizontal_gallery_items" CASCADE;
  DROP TABLE "all_blogs_blocks_horizontal_gallery" CASCADE;
  DROP TABLE "all_blogs_blocks_image" CASCADE;
  DROP TABLE "all_blogs_blocks_youtube" CASCADE;
  DROP TABLE "all_blogs_blocks_document" CASCADE;
  DROP TABLE "all_blogs_blocks_text_image" CASCADE;
  DROP TABLE "all_blogs_blocks_horizontal_scroll" CASCADE;
  DROP TABLE "all_blogs_blocks_slide_show_images" CASCADE;
  DROP TABLE "all_blogs_blocks_slide_show" CASCADE;
  DROP TABLE "all_blogs_blocks_small_gallery_items" CASCADE;
  DROP TABLE "all_blogs_blocks_small_gallery" CASCADE;
  DROP TABLE "all_blogs_blocks_equal_height_images_items_images" CASCADE;
  DROP TABLE "all_blogs_blocks_equal_height_images_items" CASCADE;
  DROP TABLE "all_blogs_blocks_equal_height_images" CASCADE;
  DROP TABLE "all_blogs_blocks_image_with_text_overlay" CASCADE;
  DROP TABLE "all_blogs_blocks_image_text_images" CASCADE;
  DROP TABLE "all_blogs_blocks_image_text" CASCADE;
  DROP TABLE "all_blogs_blocks_carousel_items" CASCADE;
  DROP TABLE "all_blogs_blocks_carousel" CASCADE;
  DROP TABLE "all_blogs_blocks_button" CASCADE;
  DROP TABLE "all_blogs_blocks_embed" CASCADE;
  DROP TABLE "all_blogs_blocks_testimonial" CASCADE;
  DROP TABLE "all_blogs_blocks_emphasis_text" CASCADE;
  DROP TABLE "all_blogs_blocks_column" CASCADE;
  DROP TABLE "all_blogs_blocks_row_2" CASCADE;
  DROP TABLE "all_blogs_blocks_row" CASCADE;
  DROP TABLE "all_blogs" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_all_blogs_fk";
  
  DROP INDEX "payload_locked_documents_rels_all_blogs_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "all_blogs_id";
  DROP TYPE "public"."enum_all_blogs_blocks_title_title_type";
  DROP TYPE "public"."enum_all_blogs_blocks_title_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_title_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_text_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_text_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_horizontal_gallery_spacing";
  DROP TYPE "public"."enum_all_blogs_blocks_horizontal_gallery_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_horizontal_gallery_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_image_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_youtube_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_document_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_text_image_title_type";
  DROP TYPE "public"."enum_all_blogs_blocks_text_image_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_text_image_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_horizontal_scroll_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_horizontal_scroll_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_slide_show_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_small_gallery_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_small_gallery_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_equal_height_images_spacing";
  DROP TYPE "public"."enum_all_blogs_blocks_equal_height_images_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_image_with_text_overlay_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_image_with_text_overlay_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_image_text_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_image_text_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_carousel_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_carousel_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_button_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_embed_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_testimonial_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_emphasis_text_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_emphasis_text_text_color";
  DROP TYPE "public"."enum_all_blogs_blocks_column_spacing";
  DROP TYPE "public"."enum_all_blogs_blocks_column_justify";
  DROP TYPE "public"."enum_all_blogs_blocks_column_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_row_2_spacing";
  DROP TYPE "public"."enum_all_blogs_blocks_row_2_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_row_2_alignment";
  DROP TYPE "public"."enum_all_blogs_blocks_row_spacing";
  DROP TYPE "public"."enum_all_blogs_blocks_row_bottom_margin";
  DROP TYPE "public"."enum_all_blogs_blocks_row_alignment";`)
}
