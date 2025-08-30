import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_edtech_blogs_blocks_title_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_title_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_title_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_horizontal_gallery_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_horizontal_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_horizontal_gallery_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_image_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_youtube_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_document_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_text_image_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_text_image_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_text_image_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_horizontal_scroll_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_horizontal_scroll_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_slide_show_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_small_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_small_gallery_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_equal_height_images_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_equal_height_images_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_image_with_text_overlay_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_image_with_text_overlay_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_image_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_image_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_carousel_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_carousel_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_button_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_embed_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_testimonial_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_emphasis_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_emphasis_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_column_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_column_justify" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_column_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_row_2_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_row_2_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_row_2_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_row_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_row_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_row_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_product_blogs_blocks_title_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_product_blogs_blocks_title_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_title_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_horizontal_gallery_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_horizontal_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_horizontal_gallery_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_image_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_youtube_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_document_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_text_image_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_product_blogs_blocks_text_image_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_text_image_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_horizontal_scroll_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_horizontal_scroll_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_slide_show_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_small_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_small_gallery_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_equal_height_images_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_equal_height_images_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_image_with_text_overlay_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_image_with_text_overlay_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_image_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_image_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_carousel_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_carousel_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_button_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_embed_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_testimonial_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_emphasis_text_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_emphasis_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_column_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_column_justify" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_product_blogs_blocks_column_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_row_2_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_row_2_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_row_2_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_product_blogs_blocks_row_spacing" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_row_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_product_blogs_blocks_row_alignment" AS ENUM('start', 'center', 'end');
  ALTER TYPE "public"."enum_blogs_blocks_title_title_type" RENAME TO "enum_uiux_blogs_blocks_title_title_type";
  ALTER TYPE "public"."enum_blogs_blocks_title_text_color" RENAME TO "enum_uiux_blogs_blocks_title_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_title_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_title_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_text_text_color" RENAME TO "enum_uiux_blogs_blocks_text_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_text_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_text_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_horizontal_gallery_spacing" RENAME TO "enum_uiux_blogs_blocks_horizontal_gallery_spacing";
  ALTER TYPE "public"."enum_blogs_blocks_horizontal_gallery_text_color" RENAME TO "enum_uiux_blogs_blocks_horizontal_gallery_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_horizontal_gallery_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_horizontal_gallery_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_image_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_image_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_youtube_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_youtube_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_document_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_document_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_text_image_title_type" RENAME TO "enum_uiux_blogs_blocks_text_image_title_type";
  ALTER TYPE "public"."enum_blogs_blocks_text_image_text_color" RENAME TO "enum_uiux_blogs_blocks_text_image_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_text_image_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_text_image_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_horizontal_scroll_text_color" RENAME TO "enum_uiux_blogs_blocks_horizontal_scroll_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_horizontal_scroll_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_horizontal_scroll_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_slide_show_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_slide_show_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_small_gallery_text_color" RENAME TO "enum_uiux_blogs_blocks_small_gallery_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_small_gallery_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_small_gallery_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_equal_height_images_spacing" RENAME TO "enum_uiux_blogs_blocks_equal_height_images_spacing";
  ALTER TYPE "public"."enum_blogs_blocks_equal_height_images_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_equal_height_images_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_image_with_text_overlay_text_color" RENAME TO "enum_uiux_blogs_blocks_image_with_text_overlay_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_image_with_text_overlay_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_image_with_text_overlay_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_image_text_text_color" RENAME TO "enum_uiux_blogs_blocks_image_text_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_image_text_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_image_text_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_carousel_text_color" RENAME TO "enum_uiux_blogs_blocks_carousel_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_carousel_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_carousel_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_button_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_button_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_embed_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_embed_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_testimonial_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_testimonial_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_emphasis_text_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_emphasis_text_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_emphasis_text_text_color" RENAME TO "enum_uiux_blogs_blocks_emphasis_text_text_color";
  ALTER TYPE "public"."enum_blogs_blocks_column_spacing" RENAME TO "enum_uiux_blogs_blocks_column_spacing";
  ALTER TYPE "public"."enum_blogs_blocks_column_justify" RENAME TO "enum_uiux_blogs_blocks_column_justify";
  ALTER TYPE "public"."enum_blogs_blocks_column_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_column_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_row_2_spacing" RENAME TO "enum_uiux_blogs_blocks_row_2_spacing";
  ALTER TYPE "public"."enum_blogs_blocks_row_2_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_row_2_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_row_2_alignment" RENAME TO "enum_uiux_blogs_blocks_row_2_alignment";
  ALTER TYPE "public"."enum_blogs_blocks_row_spacing" RENAME TO "enum_uiux_blogs_blocks_row_spacing";
  ALTER TYPE "public"."enum_blogs_blocks_row_bottom_margin" RENAME TO "enum_uiux_blogs_blocks_row_bottom_margin";
  ALTER TYPE "public"."enum_blogs_blocks_row_alignment" RENAME TO "enum_uiux_blogs_blocks_row_alignment";
  CREATE TABLE "edtech_blogs_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  INSERT INTO "edtech_blogs_tags" ("_order", "_parent_id", "id", "value")
  SELECT
    "_order",
    "_parent_id",
    "id",
    "value"
  FROM "blogs_tags";

  CREATE TABLE "edtech_blogs_blocks_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"title_type" "enum_edtech_blogs_blocks_title_title_type" DEFAULT 'title' NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_title_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_title_bottom_margin" DEFAULT 'large' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_title" ("_order", "_parent_id", "_path", "id", "text", "title_type", "text_color", "bottom_margin", "block_name")
  SELECT
    "_order",
    "_parent_id",
    "_path",
    "id",
    "text",
    "title_type"::TEXT::"enum_edtech_blogs_blocks_title_title_type",
    "text_color"::TEXT::"enum_edtech_blogs_blocks_title_text_color",
    "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_title_bottom_margin",
    "block_name"
  FROM "blogs_blocks_title";

  CREATE TABLE "edtech_blogs_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_text_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_text" ("_order", "_parent_id", "_path", "id", "text", "text_color", "bottom_margin", "block_name")
  SELECT
    "_order",
    "_parent_id",
    "_path",
    "id",
    "text",
    "text_color"::TEXT::"enum_edtech_blogs_blocks_text_text_color",
    "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_text_bottom_margin",
    "block_name"
  FROM "blogs_blocks_text";

  CREATE TABLE "edtech_blogs_blocks_horizontal_gallery_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "edtech_blogs_blocks_horizontal_gallery_items_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_horizontal_gallery_items_images";
  
  CREATE TABLE "edtech_blogs_blocks_horizontal_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb
  );
  INSERT INTO "edtech_blogs_blocks_horizontal_gallery_items" ("_order", "_parent_id", "id", "text")
  SELECT "_order", "_parent_id", "id", "text"
  FROM "blogs_blocks_horizontal_gallery_items";
  
  CREATE TABLE "edtech_blogs_blocks_horizontal_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_edtech_blogs_blocks_horizontal_gallery_spacing" DEFAULT 'regular' NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_horizontal_gallery_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_horizontal_gallery_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_horizontal_gallery" ("_order", "_parent_id", "_path", "id", "spacing", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_edtech_blogs_blocks_horizontal_gallery_spacing", "text_color"::TEXT::"enum_edtech_blogs_blocks_horizontal_gallery_text_color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_horizontal_gallery_bottom_margin", "block_name"
  FROM "blogs_blocks_horizontal_gallery";
  
  CREATE TABLE "edtech_blogs_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_image_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_image" ("_order", "_parent_id", "_path", "id", "image_id", "image_size", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "image_size", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_image_bottom_margin", "block_name"
  FROM "blogs_blocks_image";
  
  CREATE TABLE "edtech_blogs_blocks_youtube" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"embed_link" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_youtube_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_youtube" ("_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_youtube_bottom_margin", "block_name"
  FROM "blogs_blocks_youtube";
  
  CREATE TABLE "edtech_blogs_blocks_document" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"document_id" integer NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_document_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_document" ("_order", "_parent_id", "_path", "id", "label", "document_id", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "label", "document_id", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_document_bottom_margin", "block_name"
  FROM "blogs_blocks_document";
  
  CREATE TABLE "edtech_blogs_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"title_type" "enum_edtech_blogs_blocks_text_image_title_type" DEFAULT 'title' NOT NULL,
  	"text" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_text_image_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_text_image_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_text_image" ("_order", "_parent_id", "_path", "id", "title", "title_type", "text", "image_id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "title", "title_type"::TEXT::"enum_edtech_blogs_blocks_text_image_title_type", "text", "image_id", "text_color"::TEXT::"enum_edtech_blogs_blocks_text_image_text_color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_text_image_bottom_margin", "block_name"
  FROM "blogs_blocks_text_image";
  
  CREATE TABLE "edtech_blogs_blocks_horizontal_scroll" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"scroll_prompt" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_horizontal_scroll_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_horizontal_scroll_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_horizontal_scroll" ("_order", "_parent_id", "_path", "id", "image_id", "scroll_prompt", "width", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "scroll_prompt", "width", "text_color"::TEXT::"enum_edtech_blogs_blocks_horizontal_scroll_text_color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_horizontal_scroll_bottom_margin", "block_name"
  FROM "blogs_blocks_horizontal_scroll";
  
  CREATE TABLE "edtech_blogs_blocks_slide_show_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "edtech_blogs_blocks_slide_show_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_slide_show_images";
  
  CREATE TABLE "edtech_blogs_blocks_slide_show" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_slide_show_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_slide_show" ("_order", "_parent_id", "_path", "id", "image_size", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_size", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_slide_show_bottom_margin", "block_name"
  FROM "blogs_blocks_slide_show";
  
  CREATE TABLE "edtech_blogs_blocks_small_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"text" jsonb NOT NULL,
  	"link" varchar
  );
  INSERT INTO "edtech_blogs_blocks_small_gallery_items" ("_order", "_parent_id", "id", "image_id", "text", "link")
  SELECT "_order", "_parent_id", "id", "image_id", "text", "link"
  FROM "blogs_blocks_small_gallery_items";
  
  CREATE TABLE "edtech_blogs_blocks_small_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_small_gallery_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_small_gallery_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_small_gallery" ("_order", "_parent_id", "_path", "id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text_color"::TEXT::"enum_edtech_blogs_blocks_small_gallery_text_color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_small_gallery_bottom_margin", "block_name"
  FROM "blogs_blocks_small_gallery";
  
  CREATE TABLE "edtech_blogs_blocks_equal_height_images_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "edtech_blogs_blocks_equal_height_images_items_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_equal_height_images_items_images";
  
  CREATE TABLE "edtech_blogs_blocks_equal_height_images_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_size" numeric DEFAULT 50 NOT NULL
  );
  INSERT INTO "edtech_blogs_blocks_equal_height_images_items" ("_order", "_parent_id", "id", "image_size")
  SELECT "_order", "_parent_id", "id", "image_size"
  FROM "blogs_blocks_equal_height_images_items";
  
  CREATE TABLE "edtech_blogs_blocks_equal_height_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_edtech_blogs_blocks_equal_height_images_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_equal_height_images_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_equal_height_images" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_edtech_blogs_blocks_equal_height_images_spacing", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_equal_height_images_bottom_margin", "block_name"
  FROM "blogs_blocks_equal_height_images";
  
  CREATE TABLE "edtech_blogs_blocks_image_with_text_overlay" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"text_overlay" jsonb NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_image_with_text_overlay_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_image_with_text_overlay_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_image_with_text_overlay" ("_order", "_parent_id", "_path", "id", "image_id", "image_size", "text_overlay", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "image_size", "text_overlay", "text_color"::TEXT::"enum_edtech_blogs_blocks_image_with_text_overlay_text_color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_image_with_text_overlay_bottom_margin", "block_name"
  FROM "blogs_blocks_image_with_text_overlay";
  
  CREATE TABLE "edtech_blogs_blocks_image_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "edtech_blogs_blocks_image_text_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_image_text_images";
  
  CREATE TABLE "edtech_blogs_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_image_text_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_image_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_image_text" ("_order", "_parent_id", "_path", "id", "text", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text", "text_color"::TEXT::"enum_edtech_blogs_blocks_image_text_text_color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_image_text_bottom_margin", "block_name"
  FROM "blogs_blocks_image_text";
  
  CREATE TABLE "edtech_blogs_blocks_carousel_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "edtech_blogs_blocks_carousel_items" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_carousel_items";
  
  CREATE TABLE "edtech_blogs_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_carousel_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_carousel_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_carousel" ("_order", "_parent_id", "_path", "id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text_color"::TEXT::"enum_edtech_blogs_blocks_carousel_text_color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_carousel_bottom_margin", "block_name"
  FROM "blogs_blocks_carousel";
  
  CREATE TABLE "edtech_blogs_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"open_in_new_page" boolean DEFAULT false NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_button_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_button" ("_order", "_parent_id", "_path", "id", "label", "link", "open_in_new_page", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "label", "link", "open_in_new_page", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_button_bottom_margin", "block_name"
  FROM "blogs_blocks_button";
  
  CREATE TABLE "edtech_blogs_blocks_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"embed_link" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_embed_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_embed" ("_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_embed_bottom_margin", "block_name"
  FROM "blogs_blocks_embed";
  
  CREATE TABLE "edtech_blogs_blocks_testimonial" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"author" jsonb NOT NULL,
  	"avatar_id" integer,
  	"color" varchar NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_testimonial_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_testimonial" ("_order", "_parent_id", "_path", "id", "content", "author", "avatar_id", "color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "content", "author", "avatar_id", "color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_testimonial_bottom_margin", "block_name"
  FROM "blogs_blocks_testimonial";
  
  CREATE TABLE "edtech_blogs_blocks_emphasis_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"emphasis" varchar NOT NULL,
  	"text" jsonb NOT NULL,
  	"use_background" boolean DEFAULT false NOT NULL,
  	"background_color" varchar,
  	"bottom_margin" "enum_edtech_blogs_blocks_emphasis_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"text_color" "enum_edtech_blogs_blocks_emphasis_text_text_color" DEFAULT 'dark' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_emphasis_text" ("_order", "_parent_id", "_path", "id", "emphasis", "text", "use_background", "background_color", "bottom_margin", "text_color", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "emphasis", "text", "use_background", "background_color", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_emphasis_text_bottom_margin", "text_color"::TEXT::"enum_edtech_blogs_blocks_emphasis_text_text_color", "block_name"
  FROM "blogs_blocks_emphasis_text";
  
  CREATE TABLE "edtech_blogs_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_edtech_blogs_blocks_column_spacing" DEFAULT 'regular' NOT NULL,
  	"justify" "enum_edtech_blogs_blocks_column_justify" DEFAULT 'start' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_column_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_column" ("_order", "_parent_id", "_path", "id", "spacing", "justify", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_edtech_blogs_blocks_column_spacing", "justify"::TEXT::"enum_edtech_blogs_blocks_column_justify", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_column_bottom_margin", "block_name"
  FROM "blogs_blocks_column";
  
  CREATE TABLE "edtech_blogs_blocks_row_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_edtech_blogs_blocks_row_2_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_row_2_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"alignment" "enum_edtech_blogs_blocks_row_2_alignment" DEFAULT 'start' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_row_2" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "alignment", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_edtech_blogs_blocks_row_2_spacing", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_row_2_bottom_margin", "alignment"::TEXT::"enum_edtech_blogs_blocks_row_2_alignment", "block_name"
  FROM "blogs_blocks_row_2";
  
  CREATE TABLE "edtech_blogs_blocks_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_edtech_blogs_blocks_row_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_edtech_blogs_blocks_row_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"alignment" "enum_edtech_blogs_blocks_row_alignment" DEFAULT 'start' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "edtech_blogs_blocks_row" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "alignment", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_edtech_blogs_blocks_row_spacing", "bottom_margin"::TEXT::"enum_edtech_blogs_blocks_row_bottom_margin", "alignment"::TEXT::"enum_edtech_blogs_blocks_row_alignment", "block_name"
  FROM "blogs_blocks_row";
  
  CREATE TABLE "edtech_blogs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"cover_image_id" integer NOT NULL,
  	"external_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  INSERT INTO "edtech_blogs" ("id", "title", "date", "cover_image_id", "external_link", "updated_at", "created_at")
  SELECT "id", "title", "date", "cover_image_id", "external_link", "updated_at", "created_at"
  FROM "blogs";
  
  CREATE TABLE "product_blogs_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  INSERT INTO "product_blogs_tags" ("_order", "_parent_id", "id", "value")
  SELECT "_order", "_parent_id", "id", "value"
  FROM "blogs_tags";
  
  CREATE TABLE "product_blogs_blocks_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"title_type" "enum_product_blogs_blocks_title_title_type" DEFAULT 'title' NOT NULL,
  	"text_color" "enum_product_blogs_blocks_title_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_title_bottom_margin" DEFAULT 'large' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_title" ("_order", "_parent_id", "_path", "id", "text", "title_type", "text_color", "bottom_margin", "block_name")
  SELECT
    "_order",
    "_parent_id",
    "_path",
    "id",
    "text",
    "title_type"::TEXT::"enum_product_blogs_blocks_title_title_type",
    "text_color"::TEXT::"enum_product_blogs_blocks_title_text_color",
    "bottom_margin"::TEXT::"enum_product_blogs_blocks_title_bottom_margin",
    "block_name"
  FROM "blogs_blocks_title";
  
  CREATE TABLE "product_blogs_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"text_color" "enum_product_blogs_blocks_text_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_text" ("_order", "_parent_id", "_path", "id", "text", "text_color", "bottom_margin", "block_name")
  SELECT
    "_order",
    "_parent_id",
    "_path",
    "id",
    "text",
    "text_color"::TEXT::"enum_product_blogs_blocks_text_text_color",
    "bottom_margin"::TEXT::"enum_product_blogs_blocks_text_bottom_margin",
    "block_name"
  FROM "blogs_blocks_text";
  
  CREATE TABLE "product_blogs_blocks_horizontal_gallery_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "product_blogs_blocks_horizontal_gallery_items_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_horizontal_gallery_items_images";
  
  CREATE TABLE "product_blogs_blocks_horizontal_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb
  );
  INSERT INTO "product_blogs_blocks_horizontal_gallery_items" ("_order", "_parent_id", "id", "text")
  SELECT "_order", "_parent_id", "id", "text"
  FROM "blogs_blocks_horizontal_gallery_items";
  
  CREATE TABLE "product_blogs_blocks_horizontal_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_product_blogs_blocks_horizontal_gallery_spacing" DEFAULT 'regular' NOT NULL,
  	"text_color" "enum_product_blogs_blocks_horizontal_gallery_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_horizontal_gallery_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_horizontal_gallery" ("_order", "_parent_id", "_path", "id", "spacing", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_product_blogs_blocks_horizontal_gallery_spacing", "text_color"::TEXT::"enum_product_blogs_blocks_horizontal_gallery_text_color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_horizontal_gallery_bottom_margin", "block_name"
  FROM "blogs_blocks_horizontal_gallery";
  
  CREATE TABLE "product_blogs_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_image_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_image" ("_order", "_parent_id", "_path", "id", "image_id", "image_size", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "image_size", "bottom_margin"::TEXT::"enum_product_blogs_blocks_image_bottom_margin", "block_name"
  FROM "blogs_blocks_image";
  
  CREATE TABLE "product_blogs_blocks_youtube" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"embed_link" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_youtube_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_youtube" ("_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin"::TEXT::"enum_product_blogs_blocks_youtube_bottom_margin", "block_name"
  FROM "blogs_blocks_youtube";
  
  CREATE TABLE "product_blogs_blocks_document" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"document_id" integer NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_document_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_document" ("_order", "_parent_id", "_path", "id", "label", "document_id", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "label", "document_id", "bottom_margin"::TEXT::"enum_product_blogs_blocks_document_bottom_margin", "block_name"
  FROM "blogs_blocks_document";
  
  CREATE TABLE "product_blogs_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"title_type" "enum_product_blogs_blocks_text_image_title_type" DEFAULT 'title' NOT NULL,
  	"text" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"text_color" "enum_product_blogs_blocks_text_image_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_text_image_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_text_image" ("_order", "_parent_id", "_path", "id", "title", "title_type", "text", "image_id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "title", "title_type"::TEXT::"enum_product_blogs_blocks_text_image_title_type", "text", "image_id", "text_color"::TEXT::"enum_product_blogs_blocks_text_image_text_color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_text_image_bottom_margin", "block_name"
  FROM "blogs_blocks_text_image";
  
  CREATE TABLE "product_blogs_blocks_horizontal_scroll" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"scroll_prompt" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"text_color" "enum_product_blogs_blocks_horizontal_scroll_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_horizontal_scroll_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_horizontal_scroll" ("_order", "_parent_id", "_path", "id", "image_id", "scroll_prompt", "width", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "scroll_prompt", "width", "text_color"::TEXT::"enum_product_blogs_blocks_horizontal_scroll_text_color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_horizontal_scroll_bottom_margin", "block_name"
  FROM "blogs_blocks_horizontal_scroll";
  
  CREATE TABLE "product_blogs_blocks_slide_show_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "product_blogs_blocks_slide_show_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_slide_show_images";
  
  CREATE TABLE "product_blogs_blocks_slide_show" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_slide_show_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_slide_show" ("_order", "_parent_id", "_path", "id", "image_size", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_size", "bottom_margin"::TEXT::"enum_product_blogs_blocks_slide_show_bottom_margin", "block_name"
  FROM "blogs_blocks_slide_show";
  
  CREATE TABLE "product_blogs_blocks_small_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"text" jsonb NOT NULL,
  	"link" varchar
  );
  INSERT INTO "product_blogs_blocks_small_gallery_items" ("_order", "_parent_id", "id", "image_id", "text", "link")
  SELECT "_order", "_parent_id", "id", "image_id", "text", "link"
  FROM "blogs_blocks_small_gallery_items";
  
  CREATE TABLE "product_blogs_blocks_small_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text_color" "enum_product_blogs_blocks_small_gallery_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_small_gallery_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_small_gallery" ("_order", "_parent_id", "_path", "id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text_color"::TEXT::"enum_product_blogs_blocks_small_gallery_text_color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_small_gallery_bottom_margin", "block_name"
  FROM "blogs_blocks_small_gallery";
  
  CREATE TABLE "product_blogs_blocks_equal_height_images_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "product_blogs_blocks_equal_height_images_items_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_equal_height_images_items_images";
  
  CREATE TABLE "product_blogs_blocks_equal_height_images_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_size" numeric DEFAULT 50 NOT NULL
  );
  INSERT INTO "product_blogs_blocks_equal_height_images_items" ("_order", "_parent_id", "id", "image_size")
  SELECT "_order", "_parent_id", "id", "image_size"
  FROM "blogs_blocks_equal_height_images_items";
  
  CREATE TABLE "product_blogs_blocks_equal_height_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_product_blogs_blocks_equal_height_images_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_equal_height_images_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_equal_height_images" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_product_blogs_blocks_equal_height_images_spacing", "bottom_margin"::TEXT::"enum_product_blogs_blocks_equal_height_images_bottom_margin", "block_name"
  FROM "blogs_blocks_equal_height_images";
  
  CREATE TABLE "product_blogs_blocks_image_with_text_overlay" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"text_overlay" jsonb NOT NULL,
  	"text_color" "enum_product_blogs_blocks_image_with_text_overlay_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_image_with_text_overlay_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_image_with_text_overlay" ("_order", "_parent_id", "_path", "id", "image_id", "image_size", "text_overlay", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "image_id", "image_size", "text_overlay", "text_color"::TEXT::"enum_product_blogs_blocks_image_with_text_overlay_text_color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_image_with_text_overlay_bottom_margin", "block_name"
  FROM "blogs_blocks_image_with_text_overlay";
  
  CREATE TABLE "product_blogs_blocks_image_text_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "product_blogs_blocks_image_text_images" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_image_text_images";
  
  CREATE TABLE "product_blogs_blocks_image_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"text_color" "enum_product_blogs_blocks_image_text_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_image_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_image_text" ("_order", "_parent_id", "_path", "id", "text", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text", "text_color"::TEXT::"enum_product_blogs_blocks_image_text_text_color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_image_text_bottom_margin", "block_name"
  FROM "blogs_blocks_image_text";
  
  CREATE TABLE "product_blogs_blocks_carousel_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  INSERT INTO "product_blogs_blocks_carousel_items" ("_order", "_parent_id", "id", "image_id")
  SELECT "_order", "_parent_id", "id", "image_id"
  FROM "blogs_blocks_carousel_items";
  
  CREATE TABLE "product_blogs_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text_color" "enum_product_blogs_blocks_carousel_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_carousel_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_carousel" ("_order", "_parent_id", "_path", "id", "text_color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "text_color"::TEXT::"enum_product_blogs_blocks_carousel_text_color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_carousel_bottom_margin", "block_name"
  FROM "blogs_blocks_carousel";
  
  CREATE TABLE "product_blogs_blocks_button" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"open_in_new_page" boolean DEFAULT false NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_button_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_button" ("_order", "_parent_id", "_path", "id", "label", "link", "open_in_new_page", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "label", "link", "open_in_new_page", "bottom_margin"::TEXT::"enum_product_blogs_blocks_button_bottom_margin", "block_name"
  FROM "blogs_blocks_button";
  
  CREATE TABLE "product_blogs_blocks_embed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"embed_link" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_embed_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_embed" ("_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "embed_link", "width", "height", "bottom_margin"::TEXT::"enum_product_blogs_blocks_embed_bottom_margin", "block_name"
  FROM "blogs_blocks_embed";
  
  CREATE TABLE "product_blogs_blocks_testimonial" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"author" jsonb NOT NULL,
  	"avatar_id" integer,
  	"color" varchar NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_testimonial_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_testimonial" ("_order", "_parent_id", "_path", "id", "content", "author", "avatar_id", "color", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "content", "author", "avatar_id", "color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_testimonial_bottom_margin", "block_name"
  FROM "blogs_blocks_testimonial";
  
  CREATE TABLE "product_blogs_blocks_emphasis_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"emphasis" varchar NOT NULL,
  	"text" jsonb NOT NULL,
  	"use_background" boolean DEFAULT false NOT NULL,
  	"background_color" varchar,
  	"bottom_margin" "enum_product_blogs_blocks_emphasis_text_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"text_color" "enum_product_blogs_blocks_emphasis_text_text_color" DEFAULT 'dark' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_emphasis_text" ("_order", "_parent_id", "_path", "id", "emphasis", "text", "use_background", "background_color", "bottom_margin", "text_color", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "emphasis", "text", "use_background", "background_color", "bottom_margin"::TEXT::"enum_product_blogs_blocks_emphasis_text_bottom_margin", "text_color"::TEXT::"enum_product_blogs_blocks_emphasis_text_text_color", "block_name"
  FROM "blogs_blocks_emphasis_text";
  
  CREATE TABLE "product_blogs_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_product_blogs_blocks_column_spacing" DEFAULT 'regular' NOT NULL,
  	"justify" "enum_product_blogs_blocks_column_justify" DEFAULT 'start' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_column_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_column" ("_order", "_parent_id", "_path", "id", "spacing", "justify", "bottom_margin", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_product_blogs_blocks_column_spacing", "justify"::TEXT::"enum_product_blogs_blocks_column_justify", "bottom_margin"::TEXT::"enum_product_blogs_blocks_column_bottom_margin", "block_name"
  FROM "blogs_blocks_column";
  
  CREATE TABLE "product_blogs_blocks_row_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_product_blogs_blocks_row_2_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_row_2_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"alignment" "enum_product_blogs_blocks_row_2_alignment" DEFAULT 'start' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_row_2" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "alignment", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_product_blogs_blocks_row_2_spacing", "bottom_margin"::TEXT::"enum_product_blogs_blocks_row_2_bottom_margin", "alignment"::TEXT::"enum_product_blogs_blocks_row_2_alignment", "block_name"
  FROM "blogs_blocks_row_2";
  
  CREATE TABLE "product_blogs_blocks_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_product_blogs_blocks_row_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_product_blogs_blocks_row_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"alignment" "enum_product_blogs_blocks_row_alignment" DEFAULT 'start' NOT NULL,
  	"block_name" varchar
  );
  INSERT INTO "product_blogs_blocks_row" ("_order", "_parent_id", "_path", "id", "spacing", "bottom_margin", "alignment", "block_name")
  SELECT "_order", "_parent_id", "_path", "id", "spacing"::TEXT::"enum_product_blogs_blocks_row_spacing", "bottom_margin"::TEXT::"enum_product_blogs_blocks_row_bottom_margin", "alignment"::TEXT::"enum_product_blogs_blocks_row_alignment", "block_name"
  FROM "blogs_blocks_row";
  
  CREATE TABLE "product_blogs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"cover_image_id" integer NOT NULL,
  	"external_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  INSERT INTO "product_blogs" ("id", "title", "date", "cover_image_id", "external_link", "updated_at", "created_at")
  SELECT "id", "title", "date", "cover_image_id", "external_link", "updated_at", "created_at"
  FROM "blogs";
  
  ALTER TABLE "blogs_tags" RENAME TO "uiux_blogs_tags";
  ALTER TABLE "blogs_blocks_title" RENAME TO "uiux_blogs_blocks_title";
  ALTER TABLE "blogs_blocks_text" RENAME TO "uiux_blogs_blocks_text";
  ALTER TABLE "blogs_blocks_horizontal_gallery_items_images" RENAME TO "uiux_blogs_blocks_horizontal_gallery_items_images";
  ALTER TABLE "blogs_blocks_horizontal_gallery_items" RENAME TO "uiux_blogs_blocks_horizontal_gallery_items";
  ALTER TABLE "blogs_blocks_horizontal_gallery" RENAME TO "uiux_blogs_blocks_horizontal_gallery";
  ALTER TABLE "blogs_blocks_image" RENAME TO "uiux_blogs_blocks_image";
  ALTER TABLE "blogs_blocks_youtube" RENAME TO "uiux_blogs_blocks_youtube";
  ALTER TABLE "blogs_blocks_document" RENAME TO "uiux_blogs_blocks_document";
  ALTER TABLE "blogs_blocks_text_image" RENAME TO "uiux_blogs_blocks_text_image";
  ALTER TABLE "blogs_blocks_horizontal_scroll" RENAME TO "uiux_blogs_blocks_horizontal_scroll";
  ALTER TABLE "blogs_blocks_slide_show_images" RENAME TO "uiux_blogs_blocks_slide_show_images";
  ALTER TABLE "blogs_blocks_slide_show" RENAME TO "uiux_blogs_blocks_slide_show";
  ALTER TABLE "blogs_blocks_small_gallery_items" RENAME TO "uiux_blogs_blocks_small_gallery_items";
  ALTER TABLE "blogs_blocks_small_gallery" RENAME TO "uiux_blogs_blocks_small_gallery";
  ALTER TABLE "blogs_blocks_equal_height_images_items_images" RENAME TO "uiux_blogs_blocks_equal_height_images_items_images";
  ALTER TABLE "blogs_blocks_equal_height_images_items" RENAME TO "uiux_blogs_blocks_equal_height_images_items";
  ALTER TABLE "blogs_blocks_equal_height_images" RENAME TO "uiux_blogs_blocks_equal_height_images";
  ALTER TABLE "blogs_blocks_image_with_text_overlay" RENAME TO "uiux_blogs_blocks_image_with_text_overlay";
  ALTER TABLE "blogs_blocks_image_text_images" RENAME TO "uiux_blogs_blocks_image_text_images";
  ALTER TABLE "blogs_blocks_image_text" RENAME TO "uiux_blogs_blocks_image_text";
  ALTER TABLE "blogs_blocks_carousel_items" RENAME TO "uiux_blogs_blocks_carousel_items";
  ALTER TABLE "blogs_blocks_carousel" RENAME TO "uiux_blogs_blocks_carousel";
  ALTER TABLE "blogs_blocks_button" RENAME TO "uiux_blogs_blocks_button";
  ALTER TABLE "blogs_blocks_embed" RENAME TO "uiux_blogs_blocks_embed";
  ALTER TABLE "blogs_blocks_testimonial" RENAME TO "uiux_blogs_blocks_testimonial";
  ALTER TABLE "blogs_blocks_emphasis_text" RENAME TO "uiux_blogs_blocks_emphasis_text";
  ALTER TABLE "blogs_blocks_column" RENAME TO "uiux_blogs_blocks_column";
  ALTER TABLE "blogs_blocks_row_2" RENAME TO "uiux_blogs_blocks_row_2";
  ALTER TABLE "blogs_blocks_row" RENAME TO "uiux_blogs_blocks_row";
  ALTER TABLE "blogs" RENAME TO "uiux_blogs";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "blogs_id" TO "uiux_blogs_id";
  ALTER TABLE "uiux_blogs_tags" DROP CONSTRAINT "blogs_tags_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_title" DROP CONSTRAINT "blogs_blocks_title_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_text" DROP CONSTRAINT "blogs_blocks_text_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery_items_images" DROP CONSTRAINT "blogs_blocks_horizontal_gallery_items_images_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery_items_images" DROP CONSTRAINT "blogs_blocks_horizontal_gallery_items_images_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery_items" DROP CONSTRAINT "blogs_blocks_horizontal_gallery_items_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery" DROP CONSTRAINT "blogs_blocks_horizontal_gallery_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_image" DROP CONSTRAINT "blogs_blocks_image_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_image" DROP CONSTRAINT "blogs_blocks_image_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_youtube" DROP CONSTRAINT "blogs_blocks_youtube_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_document" DROP CONSTRAINT "blogs_blocks_document_document_id_document_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_document" DROP CONSTRAINT "blogs_blocks_document_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_text_image" DROP CONSTRAINT "blogs_blocks_text_image_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_text_image" DROP CONSTRAINT "blogs_blocks_text_image_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_horizontal_scroll" DROP CONSTRAINT "blogs_blocks_horizontal_scroll_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_horizontal_scroll" DROP CONSTRAINT "blogs_blocks_horizontal_scroll_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_slide_show_images" DROP CONSTRAINT "blogs_blocks_slide_show_images_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_slide_show_images" DROP CONSTRAINT "blogs_blocks_slide_show_images_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_slide_show" DROP CONSTRAINT "blogs_blocks_slide_show_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_small_gallery_items" DROP CONSTRAINT "blogs_blocks_small_gallery_items_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_small_gallery_items" DROP CONSTRAINT "blogs_blocks_small_gallery_items_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_small_gallery" DROP CONSTRAINT "blogs_blocks_small_gallery_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_equal_height_images_items_images" DROP CONSTRAINT "blogs_blocks_equal_height_images_items_images_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_equal_height_images_items_images" DROP CONSTRAINT "blogs_blocks_equal_height_images_items_images_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_equal_height_images_items" DROP CONSTRAINT "blogs_blocks_equal_height_images_items_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_equal_height_images" DROP CONSTRAINT "blogs_blocks_equal_height_images_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_image_with_text_overlay" DROP CONSTRAINT "blogs_blocks_image_with_text_overlay_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_image_with_text_overlay" DROP CONSTRAINT "blogs_blocks_image_with_text_overlay_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_image_text_images" DROP CONSTRAINT "blogs_blocks_image_text_images_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_image_text_images" DROP CONSTRAINT "blogs_blocks_image_text_images_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_image_text" DROP CONSTRAINT "blogs_blocks_image_text_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_carousel_items" DROP CONSTRAINT "blogs_blocks_carousel_items_image_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_carousel_items" DROP CONSTRAINT "blogs_blocks_carousel_items_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_carousel" DROP CONSTRAINT "blogs_blocks_carousel_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_button" DROP CONSTRAINT "blogs_blocks_button_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_embed" DROP CONSTRAINT "blogs_blocks_embed_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_testimonial" DROP CONSTRAINT "blogs_blocks_testimonial_avatar_id_media_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_testimonial" DROP CONSTRAINT "blogs_blocks_testimonial_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_emphasis_text" DROP CONSTRAINT "blogs_blocks_emphasis_text_parent_id_fk";
  
  ALTER TABLE "blogs_ii" DROP CONSTRAINT "blogs_ii_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_column" DROP CONSTRAINT "blogs_blocks_column_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_row_2" DROP CONSTRAINT "blogs_blocks_row_2_parent_id_fk";
  
  ALTER TABLE "uiux_blogs_blocks_row" DROP CONSTRAINT "blogs_blocks_row_parent_id_fk";
  
  ALTER TABLE "uiux_blogs" DROP CONSTRAINT "blogs_cover_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_blogs_fk";
  
  DROP INDEX "blogs_tags_order_idx";
  DROP INDEX "blogs_tags_parent_id_idx";
  DROP INDEX "blogs_blocks_title_order_idx";
  DROP INDEX "blogs_blocks_title_parent_id_idx";
  DROP INDEX "blogs_blocks_title_path_idx";
  DROP INDEX "blogs_blocks_text_order_idx";
  DROP INDEX "blogs_blocks_text_parent_id_idx";
  DROP INDEX "blogs_blocks_text_path_idx";
  DROP INDEX "blogs_blocks_horizontal_gallery_items_images_order_idx";
  DROP INDEX "blogs_blocks_horizontal_gallery_items_images_parent_id_idx";
  DROP INDEX "blogs_blocks_horizontal_gallery_items_images_image_idx";
  DROP INDEX "blogs_blocks_horizontal_gallery_items_order_idx";
  DROP INDEX "blogs_blocks_horizontal_gallery_items_parent_id_idx";
  DROP INDEX "blogs_blocks_horizontal_gallery_order_idx";
  DROP INDEX "blogs_blocks_horizontal_gallery_parent_id_idx";
  DROP INDEX "blogs_blocks_horizontal_gallery_path_idx";
  DROP INDEX "blogs_blocks_image_order_idx";
  DROP INDEX "blogs_blocks_image_parent_id_idx";
  DROP INDEX "blogs_blocks_image_path_idx";
  DROP INDEX "blogs_blocks_image_image_idx";
  DROP INDEX "blogs_blocks_youtube_order_idx";
  DROP INDEX "blogs_blocks_youtube_parent_id_idx";
  DROP INDEX "blogs_blocks_youtube_path_idx";
  DROP INDEX "blogs_blocks_document_order_idx";
  DROP INDEX "blogs_blocks_document_parent_id_idx";
  DROP INDEX "blogs_blocks_document_path_idx";
  DROP INDEX "blogs_blocks_document_document_idx";
  DROP INDEX "blogs_blocks_text_image_order_idx";
  DROP INDEX "blogs_blocks_text_image_parent_id_idx";
  DROP INDEX "blogs_blocks_text_image_path_idx";
  DROP INDEX "blogs_blocks_text_image_image_idx";
  DROP INDEX "blogs_blocks_horizontal_scroll_order_idx";
  DROP INDEX "blogs_blocks_horizontal_scroll_parent_id_idx";
  DROP INDEX "blogs_blocks_horizontal_scroll_path_idx";
  DROP INDEX "blogs_blocks_horizontal_scroll_image_idx";
  DROP INDEX "blogs_blocks_slide_show_images_order_idx";
  DROP INDEX "blogs_blocks_slide_show_images_parent_id_idx";
  DROP INDEX "blogs_blocks_slide_show_images_image_idx";
  DROP INDEX "blogs_blocks_slide_show_order_idx";
  DROP INDEX "blogs_blocks_slide_show_parent_id_idx";
  DROP INDEX "blogs_blocks_slide_show_path_idx";
  DROP INDEX "blogs_blocks_small_gallery_items_order_idx";
  DROP INDEX "blogs_blocks_small_gallery_items_parent_id_idx";
  DROP INDEX "blogs_blocks_small_gallery_items_image_idx";
  DROP INDEX "blogs_blocks_small_gallery_order_idx";
  DROP INDEX "blogs_blocks_small_gallery_parent_id_idx";
  DROP INDEX "blogs_blocks_small_gallery_path_idx";
  DROP INDEX "blogs_blocks_equal_height_images_items_images_order_idx";
  DROP INDEX "blogs_blocks_equal_height_images_items_images_parent_id_idx";
  DROP INDEX "blogs_blocks_equal_height_images_items_images_image_idx";
  DROP INDEX "blogs_blocks_equal_height_images_items_order_idx";
  DROP INDEX "blogs_blocks_equal_height_images_items_parent_id_idx";
  DROP INDEX "blogs_blocks_equal_height_images_order_idx";
  DROP INDEX "blogs_blocks_equal_height_images_parent_id_idx";
  DROP INDEX "blogs_blocks_equal_height_images_path_idx";
  DROP INDEX "blogs_blocks_image_with_text_overlay_order_idx";
  DROP INDEX "blogs_blocks_image_with_text_overlay_parent_id_idx";
  DROP INDEX "blogs_blocks_image_with_text_overlay_path_idx";
  DROP INDEX "blogs_blocks_image_with_text_overlay_image_idx";
  DROP INDEX "blogs_blocks_image_text_images_order_idx";
  DROP INDEX "blogs_blocks_image_text_images_parent_id_idx";
  DROP INDEX "blogs_blocks_image_text_images_image_idx";
  DROP INDEX "blogs_blocks_image_text_order_idx";
  DROP INDEX "blogs_blocks_image_text_parent_id_idx";
  DROP INDEX "blogs_blocks_image_text_path_idx";
  DROP INDEX "blogs_blocks_carousel_items_order_idx";
  DROP INDEX "blogs_blocks_carousel_items_parent_id_idx";
  DROP INDEX "blogs_blocks_carousel_items_image_idx";
  DROP INDEX "blogs_blocks_carousel_order_idx";
  DROP INDEX "blogs_blocks_carousel_parent_id_idx";
  DROP INDEX "blogs_blocks_carousel_path_idx";
  DROP INDEX "blogs_blocks_button_order_idx";
  DROP INDEX "blogs_blocks_button_parent_id_idx";
  DROP INDEX "blogs_blocks_button_path_idx";
  DROP INDEX "blogs_blocks_embed_order_idx";
  DROP INDEX "blogs_blocks_embed_parent_id_idx";
  DROP INDEX "blogs_blocks_embed_path_idx";
  DROP INDEX "blogs_blocks_testimonial_order_idx";
  DROP INDEX "blogs_blocks_testimonial_parent_id_idx";
  DROP INDEX "blogs_blocks_testimonial_path_idx";
  DROP INDEX "blogs_blocks_testimonial_avatar_idx";
  DROP INDEX "blogs_blocks_emphasis_text_order_idx";
  DROP INDEX "blogs_blocks_emphasis_text_parent_id_idx";
  DROP INDEX "blogs_blocks_emphasis_text_path_idx";
  DROP INDEX "blogs_blocks_column_order_idx";
  DROP INDEX "blogs_blocks_column_parent_id_idx";
  DROP INDEX "blogs_blocks_column_path_idx";
  DROP INDEX "blogs_blocks_row_2_order_idx";
  DROP INDEX "blogs_blocks_row_2_parent_id_idx";
  DROP INDEX "blogs_blocks_row_2_path_idx";
  DROP INDEX "blogs_blocks_row_order_idx";
  DROP INDEX "blogs_blocks_row_parent_id_idx";
  DROP INDEX "blogs_blocks_row_path_idx";
  DROP INDEX "blogs_cover_image_idx";
  DROP INDEX "blogs_updated_at_idx";
  DROP INDEX "blogs_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_blogs_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "edtech_blogs_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "product_blogs_id" integer;
  ALTER TABLE "edtech_blogs_tags" ADD CONSTRAINT "edtech_blogs_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_title" ADD CONSTRAINT "edtech_blogs_blocks_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_text" ADD CONSTRAINT "edtech_blogs_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "edtech_blogs_blocks_horizontal_gallery_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "edtech_blogs_blocks_horizontal_gallery_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs_blocks_horizontal_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_horizontal_gallery_items" ADD CONSTRAINT "edtech_blogs_blocks_horizontal_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs_blocks_horizontal_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_horizontal_gallery" ADD CONSTRAINT "edtech_blogs_blocks_horizontal_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_image" ADD CONSTRAINT "edtech_blogs_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_image" ADD CONSTRAINT "edtech_blogs_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_youtube" ADD CONSTRAINT "edtech_blogs_blocks_youtube_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_document" ADD CONSTRAINT "edtech_blogs_blocks_document_document_id_document_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_document" ADD CONSTRAINT "edtech_blogs_blocks_document_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_text_image" ADD CONSTRAINT "edtech_blogs_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_text_image" ADD CONSTRAINT "edtech_blogs_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_horizontal_scroll" ADD CONSTRAINT "edtech_blogs_blocks_horizontal_scroll_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_horizontal_scroll" ADD CONSTRAINT "edtech_blogs_blocks_horizontal_scroll_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_slide_show_images" ADD CONSTRAINT "edtech_blogs_blocks_slide_show_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_slide_show_images" ADD CONSTRAINT "edtech_blogs_blocks_slide_show_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs_blocks_slide_show"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_slide_show" ADD CONSTRAINT "edtech_blogs_blocks_slide_show_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_small_gallery_items" ADD CONSTRAINT "edtech_blogs_blocks_small_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_small_gallery_items" ADD CONSTRAINT "edtech_blogs_blocks_small_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs_blocks_small_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_small_gallery" ADD CONSTRAINT "edtech_blogs_blocks_small_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "edtech_blogs_blocks_equal_height_images_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "edtech_blogs_blocks_equal_height_images_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs_blocks_equal_height_images_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_equal_height_images_items" ADD CONSTRAINT "edtech_blogs_blocks_equal_height_images_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs_blocks_equal_height_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_equal_height_images" ADD CONSTRAINT "edtech_blogs_blocks_equal_height_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "edtech_blogs_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "edtech_blogs_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_image_text_images" ADD CONSTRAINT "edtech_blogs_blocks_image_text_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_image_text_images" ADD CONSTRAINT "edtech_blogs_blocks_image_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_image_text" ADD CONSTRAINT "edtech_blogs_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_carousel_items" ADD CONSTRAINT "edtech_blogs_blocks_carousel_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_carousel_items" ADD CONSTRAINT "edtech_blogs_blocks_carousel_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_carousel" ADD CONSTRAINT "edtech_blogs_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_button" ADD CONSTRAINT "edtech_blogs_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_embed" ADD CONSTRAINT "edtech_blogs_blocks_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_testimonial" ADD CONSTRAINT "edtech_blogs_blocks_testimonial_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_testimonial" ADD CONSTRAINT "edtech_blogs_blocks_testimonial_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_emphasis_text" ADD CONSTRAINT "edtech_blogs_blocks_emphasis_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_column" ADD CONSTRAINT "edtech_blogs_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_row_2" ADD CONSTRAINT "edtech_blogs_blocks_row_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs_blocks_row" ADD CONSTRAINT "edtech_blogs_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_blogs" ADD CONSTRAINT "edtech_blogs_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_tags" ADD CONSTRAINT "product_blogs_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_title" ADD CONSTRAINT "product_blogs_blocks_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_text" ADD CONSTRAINT "product_blogs_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "product_blogs_blocks_horizontal_gallery_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "product_blogs_blocks_horizontal_gallery_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs_blocks_horizontal_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_horizontal_gallery_items" ADD CONSTRAINT "product_blogs_blocks_horizontal_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs_blocks_horizontal_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_horizontal_gallery" ADD CONSTRAINT "product_blogs_blocks_horizontal_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_image" ADD CONSTRAINT "product_blogs_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_image" ADD CONSTRAINT "product_blogs_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_youtube" ADD CONSTRAINT "product_blogs_blocks_youtube_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_document" ADD CONSTRAINT "product_blogs_blocks_document_document_id_document_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_document" ADD CONSTRAINT "product_blogs_blocks_document_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_text_image" ADD CONSTRAINT "product_blogs_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_text_image" ADD CONSTRAINT "product_blogs_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_horizontal_scroll" ADD CONSTRAINT "product_blogs_blocks_horizontal_scroll_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_horizontal_scroll" ADD CONSTRAINT "product_blogs_blocks_horizontal_scroll_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_slide_show_images" ADD CONSTRAINT "product_blogs_blocks_slide_show_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_slide_show_images" ADD CONSTRAINT "product_blogs_blocks_slide_show_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs_blocks_slide_show"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_slide_show" ADD CONSTRAINT "product_blogs_blocks_slide_show_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_small_gallery_items" ADD CONSTRAINT "product_blogs_blocks_small_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_small_gallery_items" ADD CONSTRAINT "product_blogs_blocks_small_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs_blocks_small_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_small_gallery" ADD CONSTRAINT "product_blogs_blocks_small_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "product_blogs_blocks_equal_height_images_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "product_blogs_blocks_equal_height_images_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs_blocks_equal_height_images_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_equal_height_images_items" ADD CONSTRAINT "product_blogs_blocks_equal_height_images_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs_blocks_equal_height_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_equal_height_images" ADD CONSTRAINT "product_blogs_blocks_equal_height_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "product_blogs_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "product_blogs_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_image_text_images" ADD CONSTRAINT "product_blogs_blocks_image_text_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_image_text_images" ADD CONSTRAINT "product_blogs_blocks_image_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_image_text" ADD CONSTRAINT "product_blogs_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_carousel_items" ADD CONSTRAINT "product_blogs_blocks_carousel_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_carousel_items" ADD CONSTRAINT "product_blogs_blocks_carousel_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_carousel" ADD CONSTRAINT "product_blogs_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_button" ADD CONSTRAINT "product_blogs_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_embed" ADD CONSTRAINT "product_blogs_blocks_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_testimonial" ADD CONSTRAINT "product_blogs_blocks_testimonial_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_testimonial" ADD CONSTRAINT "product_blogs_blocks_testimonial_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_emphasis_text" ADD CONSTRAINT "product_blogs_blocks_emphasis_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_column" ADD CONSTRAINT "product_blogs_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_row_2" ADD CONSTRAINT "product_blogs_blocks_row_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs_blocks_row" ADD CONSTRAINT "product_blogs_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_blogs" ADD CONSTRAINT "product_blogs_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "edtech_blogs_tags_order_idx" ON "edtech_blogs_tags" USING btree ("_order");
  CREATE INDEX "edtech_blogs_tags_parent_id_idx" ON "edtech_blogs_tags" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_title_order_idx" ON "edtech_blogs_blocks_title" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_title_parent_id_idx" ON "edtech_blogs_blocks_title" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_title_path_idx" ON "edtech_blogs_blocks_title" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_text_order_idx" ON "edtech_blogs_blocks_text" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_text_parent_id_idx" ON "edtech_blogs_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_text_path_idx" ON "edtech_blogs_blocks_text" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_horizontal_gallery_items_images_order_idx" ON "edtech_blogs_blocks_horizontal_gallery_items_images" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_horizontal_gallery_items_images_parent_id_idx" ON "edtech_blogs_blocks_horizontal_gallery_items_images" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_horizontal_gallery_items_images_imag_idx" ON "edtech_blogs_blocks_horizontal_gallery_items_images" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_horizontal_gallery_items_order_idx" ON "edtech_blogs_blocks_horizontal_gallery_items" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_horizontal_gallery_items_parent_id_idx" ON "edtech_blogs_blocks_horizontal_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_horizontal_gallery_order_idx" ON "edtech_blogs_blocks_horizontal_gallery" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_horizontal_gallery_parent_id_idx" ON "edtech_blogs_blocks_horizontal_gallery" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_horizontal_gallery_path_idx" ON "edtech_blogs_blocks_horizontal_gallery" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_image_order_idx" ON "edtech_blogs_blocks_image" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_image_parent_id_idx" ON "edtech_blogs_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_image_path_idx" ON "edtech_blogs_blocks_image" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_image_image_idx" ON "edtech_blogs_blocks_image" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_youtube_order_idx" ON "edtech_blogs_blocks_youtube" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_youtube_parent_id_idx" ON "edtech_blogs_blocks_youtube" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_youtube_path_idx" ON "edtech_blogs_blocks_youtube" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_document_order_idx" ON "edtech_blogs_blocks_document" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_document_parent_id_idx" ON "edtech_blogs_blocks_document" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_document_path_idx" ON "edtech_blogs_blocks_document" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_document_document_idx" ON "edtech_blogs_blocks_document" USING btree ("document_id");
  CREATE INDEX "edtech_blogs_blocks_text_image_order_idx" ON "edtech_blogs_blocks_text_image" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_text_image_parent_id_idx" ON "edtech_blogs_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_text_image_path_idx" ON "edtech_blogs_blocks_text_image" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_text_image_image_idx" ON "edtech_blogs_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_horizontal_scroll_order_idx" ON "edtech_blogs_blocks_horizontal_scroll" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_horizontal_scroll_parent_id_idx" ON "edtech_blogs_blocks_horizontal_scroll" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_horizontal_scroll_path_idx" ON "edtech_blogs_blocks_horizontal_scroll" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_horizontal_scroll_image_idx" ON "edtech_blogs_blocks_horizontal_scroll" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_slide_show_images_order_idx" ON "edtech_blogs_blocks_slide_show_images" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_slide_show_images_parent_id_idx" ON "edtech_blogs_blocks_slide_show_images" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_slide_show_images_image_idx" ON "edtech_blogs_blocks_slide_show_images" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_slide_show_order_idx" ON "edtech_blogs_blocks_slide_show" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_slide_show_parent_id_idx" ON "edtech_blogs_blocks_slide_show" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_slide_show_path_idx" ON "edtech_blogs_blocks_slide_show" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_small_gallery_items_order_idx" ON "edtech_blogs_blocks_small_gallery_items" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_small_gallery_items_parent_id_idx" ON "edtech_blogs_blocks_small_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_small_gallery_items_image_idx" ON "edtech_blogs_blocks_small_gallery_items" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_small_gallery_order_idx" ON "edtech_blogs_blocks_small_gallery" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_small_gallery_parent_id_idx" ON "edtech_blogs_blocks_small_gallery" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_small_gallery_path_idx" ON "edtech_blogs_blocks_small_gallery" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_equal_height_images_items_images_order_idx" ON "edtech_blogs_blocks_equal_height_images_items_images" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_equal_height_images_items_images_parent_id_idx" ON "edtech_blogs_blocks_equal_height_images_items_images" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_equal_height_images_items_images_ima_idx" ON "edtech_blogs_blocks_equal_height_images_items_images" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_equal_height_images_items_order_idx" ON "edtech_blogs_blocks_equal_height_images_items" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_equal_height_images_items_parent_id_idx" ON "edtech_blogs_blocks_equal_height_images_items" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_equal_height_images_order_idx" ON "edtech_blogs_blocks_equal_height_images" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_equal_height_images_parent_id_idx" ON "edtech_blogs_blocks_equal_height_images" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_equal_height_images_path_idx" ON "edtech_blogs_blocks_equal_height_images" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_image_with_text_overlay_order_idx" ON "edtech_blogs_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_image_with_text_overlay_parent_id_idx" ON "edtech_blogs_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_image_with_text_overlay_path_idx" ON "edtech_blogs_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_image_with_text_overlay_image_idx" ON "edtech_blogs_blocks_image_with_text_overlay" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_image_text_images_order_idx" ON "edtech_blogs_blocks_image_text_images" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_image_text_images_parent_id_idx" ON "edtech_blogs_blocks_image_text_images" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_image_text_images_image_idx" ON "edtech_blogs_blocks_image_text_images" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_image_text_order_idx" ON "edtech_blogs_blocks_image_text" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_image_text_parent_id_idx" ON "edtech_blogs_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_image_text_path_idx" ON "edtech_blogs_blocks_image_text" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_carousel_items_order_idx" ON "edtech_blogs_blocks_carousel_items" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_carousel_items_parent_id_idx" ON "edtech_blogs_blocks_carousel_items" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_carousel_items_image_idx" ON "edtech_blogs_blocks_carousel_items" USING btree ("image_id");
  CREATE INDEX "edtech_blogs_blocks_carousel_order_idx" ON "edtech_blogs_blocks_carousel" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_carousel_parent_id_idx" ON "edtech_blogs_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_carousel_path_idx" ON "edtech_blogs_blocks_carousel" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_button_order_idx" ON "edtech_blogs_blocks_button" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_button_parent_id_idx" ON "edtech_blogs_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_button_path_idx" ON "edtech_blogs_blocks_button" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_embed_order_idx" ON "edtech_blogs_blocks_embed" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_embed_parent_id_idx" ON "edtech_blogs_blocks_embed" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_embed_path_idx" ON "edtech_blogs_blocks_embed" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_testimonial_order_idx" ON "edtech_blogs_blocks_testimonial" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_testimonial_parent_id_idx" ON "edtech_blogs_blocks_testimonial" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_testimonial_path_idx" ON "edtech_blogs_blocks_testimonial" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_testimonial_avatar_idx" ON "edtech_blogs_blocks_testimonial" USING btree ("avatar_id");
  CREATE INDEX "edtech_blogs_blocks_emphasis_text_order_idx" ON "edtech_blogs_blocks_emphasis_text" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_emphasis_text_parent_id_idx" ON "edtech_blogs_blocks_emphasis_text" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_emphasis_text_path_idx" ON "edtech_blogs_blocks_emphasis_text" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_column_order_idx" ON "edtech_blogs_blocks_column" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_column_parent_id_idx" ON "edtech_blogs_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_column_path_idx" ON "edtech_blogs_blocks_column" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_row_2_order_idx" ON "edtech_blogs_blocks_row_2" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_row_2_parent_id_idx" ON "edtech_blogs_blocks_row_2" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_row_2_path_idx" ON "edtech_blogs_blocks_row_2" USING btree ("_path");
  CREATE INDEX "edtech_blogs_blocks_row_order_idx" ON "edtech_blogs_blocks_row" USING btree ("_order");
  CREATE INDEX "edtech_blogs_blocks_row_parent_id_idx" ON "edtech_blogs_blocks_row" USING btree ("_parent_id");
  CREATE INDEX "edtech_blogs_blocks_row_path_idx" ON "edtech_blogs_blocks_row" USING btree ("_path");
  CREATE INDEX "edtech_blogs_cover_image_idx" ON "edtech_blogs" USING btree ("cover_image_id");
  CREATE INDEX "edtech_blogs_updated_at_idx" ON "edtech_blogs" USING btree ("updated_at");
  CREATE INDEX "edtech_blogs_created_at_idx" ON "edtech_blogs" USING btree ("created_at");
  CREATE INDEX "product_blogs_tags_order_idx" ON "product_blogs_tags" USING btree ("_order");
  CREATE INDEX "product_blogs_tags_parent_id_idx" ON "product_blogs_tags" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_title_order_idx" ON "product_blogs_blocks_title" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_title_parent_id_idx" ON "product_blogs_blocks_title" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_title_path_idx" ON "product_blogs_blocks_title" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_text_order_idx" ON "product_blogs_blocks_text" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_text_parent_id_idx" ON "product_blogs_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_text_path_idx" ON "product_blogs_blocks_text" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_horizontal_gallery_items_images_order_idx" ON "product_blogs_blocks_horizontal_gallery_items_images" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_horizontal_gallery_items_images_parent_id_idx" ON "product_blogs_blocks_horizontal_gallery_items_images" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_horizontal_gallery_items_images_ima_idx" ON "product_blogs_blocks_horizontal_gallery_items_images" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_horizontal_gallery_items_order_idx" ON "product_blogs_blocks_horizontal_gallery_items" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_horizontal_gallery_items_parent_id_idx" ON "product_blogs_blocks_horizontal_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_horizontal_gallery_order_idx" ON "product_blogs_blocks_horizontal_gallery" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_horizontal_gallery_parent_id_idx" ON "product_blogs_blocks_horizontal_gallery" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_horizontal_gallery_path_idx" ON "product_blogs_blocks_horizontal_gallery" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_image_order_idx" ON "product_blogs_blocks_image" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_image_parent_id_idx" ON "product_blogs_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_image_path_idx" ON "product_blogs_blocks_image" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_image_image_idx" ON "product_blogs_blocks_image" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_youtube_order_idx" ON "product_blogs_blocks_youtube" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_youtube_parent_id_idx" ON "product_blogs_blocks_youtube" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_youtube_path_idx" ON "product_blogs_blocks_youtube" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_document_order_idx" ON "product_blogs_blocks_document" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_document_parent_id_idx" ON "product_blogs_blocks_document" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_document_path_idx" ON "product_blogs_blocks_document" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_document_document_idx" ON "product_blogs_blocks_document" USING btree ("document_id");
  CREATE INDEX "product_blogs_blocks_text_image_order_idx" ON "product_blogs_blocks_text_image" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_text_image_parent_id_idx" ON "product_blogs_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_text_image_path_idx" ON "product_blogs_blocks_text_image" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_text_image_image_idx" ON "product_blogs_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_horizontal_scroll_order_idx" ON "product_blogs_blocks_horizontal_scroll" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_horizontal_scroll_parent_id_idx" ON "product_blogs_blocks_horizontal_scroll" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_horizontal_scroll_path_idx" ON "product_blogs_blocks_horizontal_scroll" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_horizontal_scroll_image_idx" ON "product_blogs_blocks_horizontal_scroll" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_slide_show_images_order_idx" ON "product_blogs_blocks_slide_show_images" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_slide_show_images_parent_id_idx" ON "product_blogs_blocks_slide_show_images" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_slide_show_images_image_idx" ON "product_blogs_blocks_slide_show_images" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_slide_show_order_idx" ON "product_blogs_blocks_slide_show" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_slide_show_parent_id_idx" ON "product_blogs_blocks_slide_show" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_slide_show_path_idx" ON "product_blogs_blocks_slide_show" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_small_gallery_items_order_idx" ON "product_blogs_blocks_small_gallery_items" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_small_gallery_items_parent_id_idx" ON "product_blogs_blocks_small_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_small_gallery_items_image_idx" ON "product_blogs_blocks_small_gallery_items" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_small_gallery_order_idx" ON "product_blogs_blocks_small_gallery" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_small_gallery_parent_id_idx" ON "product_blogs_blocks_small_gallery" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_small_gallery_path_idx" ON "product_blogs_blocks_small_gallery" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_equal_height_images_items_images_order_idx" ON "product_blogs_blocks_equal_height_images_items_images" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_equal_height_images_items_images_parent_id_idx" ON "product_blogs_blocks_equal_height_images_items_images" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_equal_height_images_items_images_im_idx" ON "product_blogs_blocks_equal_height_images_items_images" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_equal_height_images_items_order_idx" ON "product_blogs_blocks_equal_height_images_items" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_equal_height_images_items_parent_id_idx" ON "product_blogs_blocks_equal_height_images_items" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_equal_height_images_order_idx" ON "product_blogs_blocks_equal_height_images" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_equal_height_images_parent_id_idx" ON "product_blogs_blocks_equal_height_images" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_equal_height_images_path_idx" ON "product_blogs_blocks_equal_height_images" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_image_with_text_overlay_order_idx" ON "product_blogs_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_image_with_text_overlay_parent_id_idx" ON "product_blogs_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_image_with_text_overlay_path_idx" ON "product_blogs_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_image_with_text_overlay_image_idx" ON "product_blogs_blocks_image_with_text_overlay" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_image_text_images_order_idx" ON "product_blogs_blocks_image_text_images" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_image_text_images_parent_id_idx" ON "product_blogs_blocks_image_text_images" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_image_text_images_image_idx" ON "product_blogs_blocks_image_text_images" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_image_text_order_idx" ON "product_blogs_blocks_image_text" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_image_text_parent_id_idx" ON "product_blogs_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_image_text_path_idx" ON "product_blogs_blocks_image_text" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_carousel_items_order_idx" ON "product_blogs_blocks_carousel_items" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_carousel_items_parent_id_idx" ON "product_blogs_blocks_carousel_items" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_carousel_items_image_idx" ON "product_blogs_blocks_carousel_items" USING btree ("image_id");
  CREATE INDEX "product_blogs_blocks_carousel_order_idx" ON "product_blogs_blocks_carousel" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_carousel_parent_id_idx" ON "product_blogs_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_carousel_path_idx" ON "product_blogs_blocks_carousel" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_button_order_idx" ON "product_blogs_blocks_button" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_button_parent_id_idx" ON "product_blogs_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_button_path_idx" ON "product_blogs_blocks_button" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_embed_order_idx" ON "product_blogs_blocks_embed" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_embed_parent_id_idx" ON "product_blogs_blocks_embed" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_embed_path_idx" ON "product_blogs_blocks_embed" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_testimonial_order_idx" ON "product_blogs_blocks_testimonial" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_testimonial_parent_id_idx" ON "product_blogs_blocks_testimonial" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_testimonial_path_idx" ON "product_blogs_blocks_testimonial" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_testimonial_avatar_idx" ON "product_blogs_blocks_testimonial" USING btree ("avatar_id");
  CREATE INDEX "product_blogs_blocks_emphasis_text_order_idx" ON "product_blogs_blocks_emphasis_text" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_emphasis_text_parent_id_idx" ON "product_blogs_blocks_emphasis_text" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_emphasis_text_path_idx" ON "product_blogs_blocks_emphasis_text" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_column_order_idx" ON "product_blogs_blocks_column" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_column_parent_id_idx" ON "product_blogs_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_column_path_idx" ON "product_blogs_blocks_column" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_row_2_order_idx" ON "product_blogs_blocks_row_2" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_row_2_parent_id_idx" ON "product_blogs_blocks_row_2" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_row_2_path_idx" ON "product_blogs_blocks_row_2" USING btree ("_path");
  CREATE INDEX "product_blogs_blocks_row_order_idx" ON "product_blogs_blocks_row" USING btree ("_order");
  CREATE INDEX "product_blogs_blocks_row_parent_id_idx" ON "product_blogs_blocks_row" USING btree ("_parent_id");
  CREATE INDEX "product_blogs_blocks_row_path_idx" ON "product_blogs_blocks_row" USING btree ("_path");
  CREATE INDEX "product_blogs_cover_image_idx" ON "product_blogs" USING btree ("cover_image_id");
  CREATE INDEX "product_blogs_updated_at_idx" ON "product_blogs" USING btree ("updated_at");
  CREATE INDEX "product_blogs_created_at_idx" ON "product_blogs" USING btree ("created_at");
  ALTER TABLE "uiux_blogs_tags" ADD CONSTRAINT "uiux_blogs_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_title" ADD CONSTRAINT "uiux_blogs_blocks_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_text" ADD CONSTRAINT "uiux_blogs_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "uiux_blogs_blocks_horizontal_gallery_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "uiux_blogs_blocks_horizontal_gallery_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs_blocks_horizontal_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery_items" ADD CONSTRAINT "uiux_blogs_blocks_horizontal_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs_blocks_horizontal_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery" ADD CONSTRAINT "uiux_blogs_blocks_horizontal_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_image" ADD CONSTRAINT "uiux_blogs_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_image" ADD CONSTRAINT "uiux_blogs_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_youtube" ADD CONSTRAINT "uiux_blogs_blocks_youtube_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_document" ADD CONSTRAINT "uiux_blogs_blocks_document_document_id_document_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_document" ADD CONSTRAINT "uiux_blogs_blocks_document_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_text_image" ADD CONSTRAINT "uiux_blogs_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_text_image" ADD CONSTRAINT "uiux_blogs_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_horizontal_scroll" ADD CONSTRAINT "uiux_blogs_blocks_horizontal_scroll_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_horizontal_scroll" ADD CONSTRAINT "uiux_blogs_blocks_horizontal_scroll_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_slide_show_images" ADD CONSTRAINT "uiux_blogs_blocks_slide_show_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_slide_show_images" ADD CONSTRAINT "uiux_blogs_blocks_slide_show_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs_blocks_slide_show"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_slide_show" ADD CONSTRAINT "uiux_blogs_blocks_slide_show_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_small_gallery_items" ADD CONSTRAINT "uiux_blogs_blocks_small_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_small_gallery_items" ADD CONSTRAINT "uiux_blogs_blocks_small_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs_blocks_small_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_small_gallery" ADD CONSTRAINT "uiux_blogs_blocks_small_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "uiux_blogs_blocks_equal_height_images_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "uiux_blogs_blocks_equal_height_images_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs_blocks_equal_height_images_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_equal_height_images_items" ADD CONSTRAINT "uiux_blogs_blocks_equal_height_images_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs_blocks_equal_height_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_equal_height_images" ADD CONSTRAINT "uiux_blogs_blocks_equal_height_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "uiux_blogs_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "uiux_blogs_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_image_text_images" ADD CONSTRAINT "uiux_blogs_blocks_image_text_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_image_text_images" ADD CONSTRAINT "uiux_blogs_blocks_image_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_image_text" ADD CONSTRAINT "uiux_blogs_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_carousel_items" ADD CONSTRAINT "uiux_blogs_blocks_carousel_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_carousel_items" ADD CONSTRAINT "uiux_blogs_blocks_carousel_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_carousel" ADD CONSTRAINT "uiux_blogs_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_button" ADD CONSTRAINT "uiux_blogs_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_embed" ADD CONSTRAINT "uiux_blogs_blocks_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_testimonial" ADD CONSTRAINT "uiux_blogs_blocks_testimonial_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_testimonial" ADD CONSTRAINT "uiux_blogs_blocks_testimonial_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_emphasis_text" ADD CONSTRAINT "uiux_blogs_blocks_emphasis_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_ii" ADD CONSTRAINT "blogs_ii_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_column" ADD CONSTRAINT "uiux_blogs_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_row_2" ADD CONSTRAINT "uiux_blogs_blocks_row_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs_blocks_row" ADD CONSTRAINT "uiux_blogs_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_blogs" ADD CONSTRAINT "uiux_blogs_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_uiux_blogs_fk" FOREIGN KEY ("uiux_blogs_id") REFERENCES "public"."uiux_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_edtech_blogs_fk" FOREIGN KEY ("edtech_blogs_id") REFERENCES "public"."edtech_blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_product_blogs_fk" FOREIGN KEY ("product_blogs_id") REFERENCES "public"."product_blogs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "uiux_blogs_tags_order_idx" ON "uiux_blogs_tags" USING btree ("_order");
  CREATE INDEX "uiux_blogs_tags_parent_id_idx" ON "uiux_blogs_tags" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_title_order_idx" ON "uiux_blogs_blocks_title" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_title_parent_id_idx" ON "uiux_blogs_blocks_title" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_title_path_idx" ON "uiux_blogs_blocks_title" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_text_order_idx" ON "uiux_blogs_blocks_text" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_text_parent_id_idx" ON "uiux_blogs_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_text_path_idx" ON "uiux_blogs_blocks_text" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_horizontal_gallery_items_images_order_idx" ON "uiux_blogs_blocks_horizontal_gallery_items_images" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_horizontal_gallery_items_images_parent_id_idx" ON "uiux_blogs_blocks_horizontal_gallery_items_images" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_horizontal_gallery_items_images_image_idx" ON "uiux_blogs_blocks_horizontal_gallery_items_images" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_horizontal_gallery_items_order_idx" ON "uiux_blogs_blocks_horizontal_gallery_items" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_horizontal_gallery_items_parent_id_idx" ON "uiux_blogs_blocks_horizontal_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_horizontal_gallery_order_idx" ON "uiux_blogs_blocks_horizontal_gallery" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_horizontal_gallery_parent_id_idx" ON "uiux_blogs_blocks_horizontal_gallery" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_horizontal_gallery_path_idx" ON "uiux_blogs_blocks_horizontal_gallery" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_image_order_idx" ON "uiux_blogs_blocks_image" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_image_parent_id_idx" ON "uiux_blogs_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_image_path_idx" ON "uiux_blogs_blocks_image" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_image_image_idx" ON "uiux_blogs_blocks_image" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_youtube_order_idx" ON "uiux_blogs_blocks_youtube" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_youtube_parent_id_idx" ON "uiux_blogs_blocks_youtube" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_youtube_path_idx" ON "uiux_blogs_blocks_youtube" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_document_order_idx" ON "uiux_blogs_blocks_document" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_document_parent_id_idx" ON "uiux_blogs_blocks_document" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_document_path_idx" ON "uiux_blogs_blocks_document" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_document_document_idx" ON "uiux_blogs_blocks_document" USING btree ("document_id");
  CREATE INDEX "uiux_blogs_blocks_text_image_order_idx" ON "uiux_blogs_blocks_text_image" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_text_image_parent_id_idx" ON "uiux_blogs_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_text_image_path_idx" ON "uiux_blogs_blocks_text_image" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_text_image_image_idx" ON "uiux_blogs_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_horizontal_scroll_order_idx" ON "uiux_blogs_blocks_horizontal_scroll" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_horizontal_scroll_parent_id_idx" ON "uiux_blogs_blocks_horizontal_scroll" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_horizontal_scroll_path_idx" ON "uiux_blogs_blocks_horizontal_scroll" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_horizontal_scroll_image_idx" ON "uiux_blogs_blocks_horizontal_scroll" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_slide_show_images_order_idx" ON "uiux_blogs_blocks_slide_show_images" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_slide_show_images_parent_id_idx" ON "uiux_blogs_blocks_slide_show_images" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_slide_show_images_image_idx" ON "uiux_blogs_blocks_slide_show_images" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_slide_show_order_idx" ON "uiux_blogs_blocks_slide_show" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_slide_show_parent_id_idx" ON "uiux_blogs_blocks_slide_show" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_slide_show_path_idx" ON "uiux_blogs_blocks_slide_show" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_small_gallery_items_order_idx" ON "uiux_blogs_blocks_small_gallery_items" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_small_gallery_items_parent_id_idx" ON "uiux_blogs_blocks_small_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_small_gallery_items_image_idx" ON "uiux_blogs_blocks_small_gallery_items" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_small_gallery_order_idx" ON "uiux_blogs_blocks_small_gallery" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_small_gallery_parent_id_idx" ON "uiux_blogs_blocks_small_gallery" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_small_gallery_path_idx" ON "uiux_blogs_blocks_small_gallery" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_equal_height_images_items_images_order_idx" ON "uiux_blogs_blocks_equal_height_images_items_images" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_equal_height_images_items_images_parent_id_idx" ON "uiux_blogs_blocks_equal_height_images_items_images" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_equal_height_images_items_images_image_idx" ON "uiux_blogs_blocks_equal_height_images_items_images" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_equal_height_images_items_order_idx" ON "uiux_blogs_blocks_equal_height_images_items" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_equal_height_images_items_parent_id_idx" ON "uiux_blogs_blocks_equal_height_images_items" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_equal_height_images_order_idx" ON "uiux_blogs_blocks_equal_height_images" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_equal_height_images_parent_id_idx" ON "uiux_blogs_blocks_equal_height_images" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_equal_height_images_path_idx" ON "uiux_blogs_blocks_equal_height_images" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_image_with_text_overlay_order_idx" ON "uiux_blogs_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_image_with_text_overlay_parent_id_idx" ON "uiux_blogs_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_image_with_text_overlay_path_idx" ON "uiux_blogs_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_image_with_text_overlay_image_idx" ON "uiux_blogs_blocks_image_with_text_overlay" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_image_text_images_order_idx" ON "uiux_blogs_blocks_image_text_images" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_image_text_images_parent_id_idx" ON "uiux_blogs_blocks_image_text_images" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_image_text_images_image_idx" ON "uiux_blogs_blocks_image_text_images" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_image_text_order_idx" ON "uiux_blogs_blocks_image_text" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_image_text_parent_id_idx" ON "uiux_blogs_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_image_text_path_idx" ON "uiux_blogs_blocks_image_text" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_carousel_items_order_idx" ON "uiux_blogs_blocks_carousel_items" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_carousel_items_parent_id_idx" ON "uiux_blogs_blocks_carousel_items" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_carousel_items_image_idx" ON "uiux_blogs_blocks_carousel_items" USING btree ("image_id");
  CREATE INDEX "uiux_blogs_blocks_carousel_order_idx" ON "uiux_blogs_blocks_carousel" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_carousel_parent_id_idx" ON "uiux_blogs_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_carousel_path_idx" ON "uiux_blogs_blocks_carousel" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_button_order_idx" ON "uiux_blogs_blocks_button" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_button_parent_id_idx" ON "uiux_blogs_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_button_path_idx" ON "uiux_blogs_blocks_button" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_embed_order_idx" ON "uiux_blogs_blocks_embed" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_embed_parent_id_idx" ON "uiux_blogs_blocks_embed" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_embed_path_idx" ON "uiux_blogs_blocks_embed" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_testimonial_order_idx" ON "uiux_blogs_blocks_testimonial" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_testimonial_parent_id_idx" ON "uiux_blogs_blocks_testimonial" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_testimonial_path_idx" ON "uiux_blogs_blocks_testimonial" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_testimonial_avatar_idx" ON "uiux_blogs_blocks_testimonial" USING btree ("avatar_id");
  CREATE INDEX "uiux_blogs_blocks_emphasis_text_order_idx" ON "uiux_blogs_blocks_emphasis_text" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_emphasis_text_parent_id_idx" ON "uiux_blogs_blocks_emphasis_text" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_emphasis_text_path_idx" ON "uiux_blogs_blocks_emphasis_text" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_column_order_idx" ON "uiux_blogs_blocks_column" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_column_parent_id_idx" ON "uiux_blogs_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_column_path_idx" ON "uiux_blogs_blocks_column" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_row_2_order_idx" ON "uiux_blogs_blocks_row_2" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_row_2_parent_id_idx" ON "uiux_blogs_blocks_row_2" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_row_2_path_idx" ON "uiux_blogs_blocks_row_2" USING btree ("_path");
  CREATE INDEX "uiux_blogs_blocks_row_order_idx" ON "uiux_blogs_blocks_row" USING btree ("_order");
  CREATE INDEX "uiux_blogs_blocks_row_parent_id_idx" ON "uiux_blogs_blocks_row" USING btree ("_parent_id");
  CREATE INDEX "uiux_blogs_blocks_row_path_idx" ON "uiux_blogs_blocks_row" USING btree ("_path");
  CREATE INDEX "uiux_blogs_cover_image_idx" ON "uiux_blogs" USING btree ("cover_image_id");
  CREATE INDEX "uiux_blogs_updated_at_idx" ON "uiux_blogs" USING btree ("updated_at");
  CREATE INDEX "uiux_blogs_created_at_idx" ON "uiux_blogs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_uiux_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("uiux_blogs_id");
  CREATE INDEX "payload_locked_documents_rels_edtech_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("edtech_blogs_id");
  CREATE INDEX "payload_locked_documents_rels_product_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("product_blogs_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_uiux_blogs_blocks_title_title_type" RENAME TO "enum_blogs_blocks_title_title_type";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_title_text_color" RENAME TO "enum_blogs_blocks_title_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_title_bottom_margin" RENAME TO "enum_blogs_blocks_title_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_text_text_color" RENAME TO "enum_blogs_blocks_text_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_text_bottom_margin" RENAME TO "enum_blogs_blocks_text_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_horizontal_gallery_spacing" RENAME TO "enum_blogs_blocks_horizontal_gallery_spacing";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_horizontal_gallery_text_color" RENAME TO "enum_blogs_blocks_horizontal_gallery_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_horizontal_gallery_bottom_margin" RENAME TO "enum_blogs_blocks_horizontal_gallery_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_image_bottom_margin" RENAME TO "enum_blogs_blocks_image_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_youtube_bottom_margin" RENAME TO "enum_blogs_blocks_youtube_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_document_bottom_margin" RENAME TO "enum_blogs_blocks_document_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_text_image_title_type" RENAME TO "enum_blogs_blocks_text_image_title_type";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_text_image_text_color" RENAME TO "enum_blogs_blocks_text_image_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_text_image_bottom_margin" RENAME TO "enum_blogs_blocks_text_image_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_horizontal_scroll_text_color" RENAME TO "enum_blogs_blocks_horizontal_scroll_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_horizontal_scroll_bottom_margin" RENAME TO "enum_blogs_blocks_horizontal_scroll_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_slide_show_bottom_margin" RENAME TO "enum_blogs_blocks_slide_show_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_small_gallery_text_color" RENAME TO "enum_blogs_blocks_small_gallery_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_small_gallery_bottom_margin" RENAME TO "enum_blogs_blocks_small_gallery_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_equal_height_images_spacing" RENAME TO "enum_blogs_blocks_equal_height_images_spacing";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_equal_height_images_bottom_margin" RENAME TO "enum_blogs_blocks_equal_height_images_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_image_with_text_overlay_text_color" RENAME TO "enum_blogs_blocks_image_with_text_overlay_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_image_with_text_overlay_bottom_margin" RENAME TO "enum_blogs_blocks_image_with_text_overlay_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_image_text_text_color" RENAME TO "enum_blogs_blocks_image_text_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_image_text_bottom_margin" RENAME TO "enum_blogs_blocks_image_text_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_carousel_text_color" RENAME TO "enum_blogs_blocks_carousel_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_carousel_bottom_margin" RENAME TO "enum_blogs_blocks_carousel_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_button_bottom_margin" RENAME TO "enum_blogs_blocks_button_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_embed_bottom_margin" RENAME TO "enum_blogs_blocks_embed_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_testimonial_bottom_margin" RENAME TO "enum_blogs_blocks_testimonial_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_emphasis_text_bottom_margin" RENAME TO "enum_blogs_blocks_emphasis_text_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_emphasis_text_text_color" RENAME TO "enum_blogs_blocks_emphasis_text_text_color";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_column_spacing" RENAME TO "enum_blogs_blocks_column_spacing";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_column_justify" RENAME TO "enum_blogs_blocks_column_justify";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_column_bottom_margin" RENAME TO "enum_blogs_blocks_column_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_row_2_spacing" RENAME TO "enum_blogs_blocks_row_2_spacing";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_row_2_bottom_margin" RENAME TO "enum_blogs_blocks_row_2_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_row_2_alignment" RENAME TO "enum_blogs_blocks_row_2_alignment";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_row_spacing" RENAME TO "enum_blogs_blocks_row_spacing";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_row_bottom_margin" RENAME TO "enum_blogs_blocks_row_bottom_margin";
  ALTER TYPE "public"."enum_uiux_blogs_blocks_row_alignment" RENAME TO "enum_blogs_blocks_row_alignment";
  ALTER TABLE "edtech_blogs_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_title" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_horizontal_gallery_items_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_horizontal_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_horizontal_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_youtube" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_document" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_text_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_horizontal_scroll" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_slide_show_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_slide_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_small_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_small_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_equal_height_images_items_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_equal_height_images_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_equal_height_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_image_with_text_overlay" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_image_text_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_image_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_carousel_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_carousel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_button" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_embed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_testimonial" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_emphasis_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_column" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_row_2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs_blocks_row" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_blogs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_title" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_horizontal_gallery_items_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_horizontal_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_horizontal_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_youtube" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_document" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_text_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_horizontal_scroll" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_slide_show_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_slide_show" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_small_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_small_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_equal_height_images_items_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_equal_height_images_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_equal_height_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_image_with_text_overlay" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_image_text_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_image_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_carousel_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_carousel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_button" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_embed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_testimonial" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_emphasis_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_column" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_row_2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs_blocks_row" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_blogs" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "edtech_blogs_tags" CASCADE;
  DROP TABLE "edtech_blogs_blocks_title" CASCADE;
  DROP TABLE "edtech_blogs_blocks_text" CASCADE;
  DROP TABLE "edtech_blogs_blocks_horizontal_gallery_items_images" CASCADE;
  DROP TABLE "edtech_blogs_blocks_horizontal_gallery_items" CASCADE;
  DROP TABLE "edtech_blogs_blocks_horizontal_gallery" CASCADE;
  DROP TABLE "edtech_blogs_blocks_image" CASCADE;
  DROP TABLE "edtech_blogs_blocks_youtube" CASCADE;
  DROP TABLE "edtech_blogs_blocks_document" CASCADE;
  DROP TABLE "edtech_blogs_blocks_text_image" CASCADE;
  DROP TABLE "edtech_blogs_blocks_horizontal_scroll" CASCADE;
  DROP TABLE "edtech_blogs_blocks_slide_show_images" CASCADE;
  DROP TABLE "edtech_blogs_blocks_slide_show" CASCADE;
  DROP TABLE "edtech_blogs_blocks_small_gallery_items" CASCADE;
  DROP TABLE "edtech_blogs_blocks_small_gallery" CASCADE;
  DROP TABLE "edtech_blogs_blocks_equal_height_images_items_images" CASCADE;
  DROP TABLE "edtech_blogs_blocks_equal_height_images_items" CASCADE;
  DROP TABLE "edtech_blogs_blocks_equal_height_images" CASCADE;
  DROP TABLE "edtech_blogs_blocks_image_with_text_overlay" CASCADE;
  DROP TABLE "edtech_blogs_blocks_image_text_images" CASCADE;
  DROP TABLE "edtech_blogs_blocks_image_text" CASCADE;
  DROP TABLE "edtech_blogs_blocks_carousel_items" CASCADE;
  DROP TABLE "edtech_blogs_blocks_carousel" CASCADE;
  DROP TABLE "edtech_blogs_blocks_button" CASCADE;
  DROP TABLE "edtech_blogs_blocks_embed" CASCADE;
  DROP TABLE "edtech_blogs_blocks_testimonial" CASCADE;
  DROP TABLE "edtech_blogs_blocks_emphasis_text" CASCADE;
  DROP TABLE "edtech_blogs_blocks_column" CASCADE;
  DROP TABLE "edtech_blogs_blocks_row_2" CASCADE;
  DROP TABLE "edtech_blogs_blocks_row" CASCADE;
  DROP TABLE "edtech_blogs" CASCADE;
  DROP TABLE "product_blogs_tags" CASCADE;
  DROP TABLE "product_blogs_blocks_title" CASCADE;
  DROP TABLE "product_blogs_blocks_text" CASCADE;
  DROP TABLE "product_blogs_blocks_horizontal_gallery_items_images" CASCADE;
  DROP TABLE "product_blogs_blocks_horizontal_gallery_items" CASCADE;
  DROP TABLE "product_blogs_blocks_horizontal_gallery" CASCADE;
  DROP TABLE "product_blogs_blocks_image" CASCADE;
  DROP TABLE "product_blogs_blocks_youtube" CASCADE;
  DROP TABLE "product_blogs_blocks_document" CASCADE;
  DROP TABLE "product_blogs_blocks_text_image" CASCADE;
  DROP TABLE "product_blogs_blocks_horizontal_scroll" CASCADE;
  DROP TABLE "product_blogs_blocks_slide_show_images" CASCADE;
  DROP TABLE "product_blogs_blocks_slide_show" CASCADE;
  DROP TABLE "product_blogs_blocks_small_gallery_items" CASCADE;
  DROP TABLE "product_blogs_blocks_small_gallery" CASCADE;
  DROP TABLE "product_blogs_blocks_equal_height_images_items_images" CASCADE;
  DROP TABLE "product_blogs_blocks_equal_height_images_items" CASCADE;
  DROP TABLE "product_blogs_blocks_equal_height_images" CASCADE;
  DROP TABLE "product_blogs_blocks_image_with_text_overlay" CASCADE;
  DROP TABLE "product_blogs_blocks_image_text_images" CASCADE;
  DROP TABLE "product_blogs_blocks_image_text" CASCADE;
  DROP TABLE "product_blogs_blocks_carousel_items" CASCADE;
  DROP TABLE "product_blogs_blocks_carousel" CASCADE;
  DROP TABLE "product_blogs_blocks_button" CASCADE;
  DROP TABLE "product_blogs_blocks_embed" CASCADE;
  DROP TABLE "product_blogs_blocks_testimonial" CASCADE;
  DROP TABLE "product_blogs_blocks_emphasis_text" CASCADE;
  DROP TABLE "product_blogs_blocks_column" CASCADE;
  DROP TABLE "product_blogs_blocks_row_2" CASCADE;
  DROP TABLE "product_blogs_blocks_row" CASCADE;
  DROP TABLE "product_blogs" CASCADE;
  ALTER TABLE "uiux_blogs_tags" RENAME TO "blogs_tags";
  ALTER TABLE "uiux_blogs_blocks_title" RENAME TO "blogs_blocks_title";
  ALTER TABLE "uiux_blogs_blocks_text" RENAME TO "blogs_blocks_text";
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery_items_images" RENAME TO "blogs_blocks_horizontal_gallery_items_images";
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery_items" RENAME TO "blogs_blocks_horizontal_gallery_items";
  ALTER TABLE "uiux_blogs_blocks_horizontal_gallery" RENAME TO "blogs_blocks_horizontal_gallery";
  ALTER TABLE "uiux_blogs_blocks_image" RENAME TO "blogs_blocks_image";
  ALTER TABLE "uiux_blogs_blocks_youtube" RENAME TO "blogs_blocks_youtube";
  ALTER TABLE "uiux_blogs_blocks_document" RENAME TO "blogs_blocks_document";
  ALTER TABLE "uiux_blogs_blocks_text_image" RENAME TO "blogs_blocks_text_image";
  ALTER TABLE "uiux_blogs_blocks_horizontal_scroll" RENAME TO "blogs_blocks_horizontal_scroll";
  ALTER TABLE "uiux_blogs_blocks_slide_show_images" RENAME TO "blogs_blocks_slide_show_images";
  ALTER TABLE "uiux_blogs_blocks_slide_show" RENAME TO "blogs_blocks_slide_show";
  ALTER TABLE "uiux_blogs_blocks_small_gallery_items" RENAME TO "blogs_blocks_small_gallery_items";
  ALTER TABLE "uiux_blogs_blocks_small_gallery" RENAME TO "blogs_blocks_small_gallery";
  ALTER TABLE "uiux_blogs_blocks_equal_height_images_items_images" RENAME TO "blogs_blocks_equal_height_images_items_images";
  ALTER TABLE "uiux_blogs_blocks_equal_height_images_items" RENAME TO "blogs_blocks_equal_height_images_items";
  ALTER TABLE "uiux_blogs_blocks_equal_height_images" RENAME TO "blogs_blocks_equal_height_images";
  ALTER TABLE "uiux_blogs_blocks_image_with_text_overlay" RENAME TO "blogs_blocks_image_with_text_overlay";
  ALTER TABLE "uiux_blogs_blocks_image_text_images" RENAME TO "blogs_blocks_image_text_images";
  ALTER TABLE "uiux_blogs_blocks_image_text" RENAME TO "blogs_blocks_image_text";
  ALTER TABLE "uiux_blogs_blocks_carousel_items" RENAME TO "blogs_blocks_carousel_items";
  ALTER TABLE "uiux_blogs_blocks_carousel" RENAME TO "blogs_blocks_carousel";
  ALTER TABLE "uiux_blogs_blocks_button" RENAME TO "blogs_blocks_button";
  ALTER TABLE "uiux_blogs_blocks_embed" RENAME TO "blogs_blocks_embed";
  ALTER TABLE "uiux_blogs_blocks_testimonial" RENAME TO "blogs_blocks_testimonial";
  ALTER TABLE "uiux_blogs_blocks_emphasis_text" RENAME TO "blogs_blocks_emphasis_text";
  ALTER TABLE "uiux_blogs_blocks_column" RENAME TO "blogs_blocks_column";
  ALTER TABLE "uiux_blogs_blocks_row_2" RENAME TO "blogs_blocks_row_2";
  ALTER TABLE "uiux_blogs_blocks_row" RENAME TO "blogs_blocks_row";
  ALTER TABLE "uiux_blogs" RENAME TO "blogs";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "uiux_blogs_id" TO "blogs_id";
  ALTER TABLE "blogs_tags" DROP CONSTRAINT "uiux_blogs_tags_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_title" DROP CONSTRAINT "uiux_blogs_blocks_title_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_text" DROP CONSTRAINT "uiux_blogs_blocks_text_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_horizontal_gallery_items_images" DROP CONSTRAINT "uiux_blogs_blocks_horizontal_gallery_items_images_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_horizontal_gallery_items_images" DROP CONSTRAINT "uiux_blogs_blocks_horizontal_gallery_items_images_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_horizontal_gallery_items" DROP CONSTRAINT "uiux_blogs_blocks_horizontal_gallery_items_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_horizontal_gallery" DROP CONSTRAINT "uiux_blogs_blocks_horizontal_gallery_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_image" DROP CONSTRAINT "uiux_blogs_blocks_image_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_image" DROP CONSTRAINT "uiux_blogs_blocks_image_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_youtube" DROP CONSTRAINT "uiux_blogs_blocks_youtube_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_document" DROP CONSTRAINT "uiux_blogs_blocks_document_document_id_document_id_fk";
  
  ALTER TABLE "blogs_blocks_document" DROP CONSTRAINT "uiux_blogs_blocks_document_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_text_image" DROP CONSTRAINT "uiux_blogs_blocks_text_image_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_text_image" DROP CONSTRAINT "uiux_blogs_blocks_text_image_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_horizontal_scroll" DROP CONSTRAINT "uiux_blogs_blocks_horizontal_scroll_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_horizontal_scroll" DROP CONSTRAINT "uiux_blogs_blocks_horizontal_scroll_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_slide_show_images" DROP CONSTRAINT "uiux_blogs_blocks_slide_show_images_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_slide_show_images" DROP CONSTRAINT "uiux_blogs_blocks_slide_show_images_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_slide_show" DROP CONSTRAINT "uiux_blogs_blocks_slide_show_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_small_gallery_items" DROP CONSTRAINT "uiux_blogs_blocks_small_gallery_items_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_small_gallery_items" DROP CONSTRAINT "uiux_blogs_blocks_small_gallery_items_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_small_gallery" DROP CONSTRAINT "uiux_blogs_blocks_small_gallery_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_equal_height_images_items_images" DROP CONSTRAINT "uiux_blogs_blocks_equal_height_images_items_images_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_equal_height_images_items_images" DROP CONSTRAINT "uiux_blogs_blocks_equal_height_images_items_images_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_equal_height_images_items" DROP CONSTRAINT "uiux_blogs_blocks_equal_height_images_items_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_equal_height_images" DROP CONSTRAINT "uiux_blogs_blocks_equal_height_images_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_image_with_text_overlay" DROP CONSTRAINT "uiux_blogs_blocks_image_with_text_overlay_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_image_with_text_overlay" DROP CONSTRAINT "uiux_blogs_blocks_image_with_text_overlay_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_image_text_images" DROP CONSTRAINT "uiux_blogs_blocks_image_text_images_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_image_text_images" DROP CONSTRAINT "uiux_blogs_blocks_image_text_images_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_image_text" DROP CONSTRAINT "uiux_blogs_blocks_image_text_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_carousel_items" DROP CONSTRAINT "uiux_blogs_blocks_carousel_items_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_carousel_items" DROP CONSTRAINT "uiux_blogs_blocks_carousel_items_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_carousel" DROP CONSTRAINT "uiux_blogs_blocks_carousel_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_button" DROP CONSTRAINT "uiux_blogs_blocks_button_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_embed" DROP CONSTRAINT "uiux_blogs_blocks_embed_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_testimonial" DROP CONSTRAINT "uiux_blogs_blocks_testimonial_avatar_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_testimonial" DROP CONSTRAINT "uiux_blogs_blocks_testimonial_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_emphasis_text" DROP CONSTRAINT "uiux_blogs_blocks_emphasis_text_parent_id_fk";
  
  ALTER TABLE "blogs_ii" DROP CONSTRAINT "blogs_ii_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_column" DROP CONSTRAINT "uiux_blogs_blocks_column_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_row_2" DROP CONSTRAINT "uiux_blogs_blocks_row_2_parent_id_fk";
  
  ALTER TABLE "blogs_blocks_row" DROP CONSTRAINT "uiux_blogs_blocks_row_parent_id_fk";
  
  ALTER TABLE "blogs" DROP CONSTRAINT "uiux_blogs_cover_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_uiux_blogs_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_edtech_blogs_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_product_blogs_fk";
  
  DROP INDEX "uiux_blogs_tags_order_idx";
  DROP INDEX "uiux_blogs_tags_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_title_order_idx";
  DROP INDEX "uiux_blogs_blocks_title_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_title_path_idx";
  DROP INDEX "uiux_blogs_blocks_text_order_idx";
  DROP INDEX "uiux_blogs_blocks_text_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_text_path_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_gallery_items_images_order_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_gallery_items_images_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_gallery_items_images_image_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_gallery_items_order_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_gallery_items_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_gallery_order_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_gallery_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_gallery_path_idx";
  DROP INDEX "uiux_blogs_blocks_image_order_idx";
  DROP INDEX "uiux_blogs_blocks_image_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_image_path_idx";
  DROP INDEX "uiux_blogs_blocks_image_image_idx";
  DROP INDEX "uiux_blogs_blocks_youtube_order_idx";
  DROP INDEX "uiux_blogs_blocks_youtube_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_youtube_path_idx";
  DROP INDEX "uiux_blogs_blocks_document_order_idx";
  DROP INDEX "uiux_blogs_blocks_document_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_document_path_idx";
  DROP INDEX "uiux_blogs_blocks_document_document_idx";
  DROP INDEX "uiux_blogs_blocks_text_image_order_idx";
  DROP INDEX "uiux_blogs_blocks_text_image_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_text_image_path_idx";
  DROP INDEX "uiux_blogs_blocks_text_image_image_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_scroll_order_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_scroll_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_scroll_path_idx";
  DROP INDEX "uiux_blogs_blocks_horizontal_scroll_image_idx";
  DROP INDEX "uiux_blogs_blocks_slide_show_images_order_idx";
  DROP INDEX "uiux_blogs_blocks_slide_show_images_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_slide_show_images_image_idx";
  DROP INDEX "uiux_blogs_blocks_slide_show_order_idx";
  DROP INDEX "uiux_blogs_blocks_slide_show_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_slide_show_path_idx";
  DROP INDEX "uiux_blogs_blocks_small_gallery_items_order_idx";
  DROP INDEX "uiux_blogs_blocks_small_gallery_items_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_small_gallery_items_image_idx";
  DROP INDEX "uiux_blogs_blocks_small_gallery_order_idx";
  DROP INDEX "uiux_blogs_blocks_small_gallery_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_small_gallery_path_idx";
  DROP INDEX "uiux_blogs_blocks_equal_height_images_items_images_order_idx";
  DROP INDEX "uiux_blogs_blocks_equal_height_images_items_images_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_equal_height_images_items_images_image_idx";
  DROP INDEX "uiux_blogs_blocks_equal_height_images_items_order_idx";
  DROP INDEX "uiux_blogs_blocks_equal_height_images_items_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_equal_height_images_order_idx";
  DROP INDEX "uiux_blogs_blocks_equal_height_images_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_equal_height_images_path_idx";
  DROP INDEX "uiux_blogs_blocks_image_with_text_overlay_order_idx";
  DROP INDEX "uiux_blogs_blocks_image_with_text_overlay_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_image_with_text_overlay_path_idx";
  DROP INDEX "uiux_blogs_blocks_image_with_text_overlay_image_idx";
  DROP INDEX "uiux_blogs_blocks_image_text_images_order_idx";
  DROP INDEX "uiux_blogs_blocks_image_text_images_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_image_text_images_image_idx";
  DROP INDEX "uiux_blogs_blocks_image_text_order_idx";
  DROP INDEX "uiux_blogs_blocks_image_text_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_image_text_path_idx";
  DROP INDEX "uiux_blogs_blocks_carousel_items_order_idx";
  DROP INDEX "uiux_blogs_blocks_carousel_items_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_carousel_items_image_idx";
  DROP INDEX "uiux_blogs_blocks_carousel_order_idx";
  DROP INDEX "uiux_blogs_blocks_carousel_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_carousel_path_idx";
  DROP INDEX "uiux_blogs_blocks_button_order_idx";
  DROP INDEX "uiux_blogs_blocks_button_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_button_path_idx";
  DROP INDEX "uiux_blogs_blocks_embed_order_idx";
  DROP INDEX "uiux_blogs_blocks_embed_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_embed_path_idx";
  DROP INDEX "uiux_blogs_blocks_testimonial_order_idx";
  DROP INDEX "uiux_blogs_blocks_testimonial_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_testimonial_path_idx";
  DROP INDEX "uiux_blogs_blocks_testimonial_avatar_idx";
  DROP INDEX "uiux_blogs_blocks_emphasis_text_order_idx";
  DROP INDEX "uiux_blogs_blocks_emphasis_text_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_emphasis_text_path_idx";
  DROP INDEX "uiux_blogs_blocks_column_order_idx";
  DROP INDEX "uiux_blogs_blocks_column_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_column_path_idx";
  DROP INDEX "uiux_blogs_blocks_row_2_order_idx";
  DROP INDEX "uiux_blogs_blocks_row_2_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_row_2_path_idx";
  DROP INDEX "uiux_blogs_blocks_row_order_idx";
  DROP INDEX "uiux_blogs_blocks_row_parent_id_idx";
  DROP INDEX "uiux_blogs_blocks_row_path_idx";
  DROP INDEX "uiux_blogs_cover_image_idx";
  DROP INDEX "uiux_blogs_updated_at_idx";
  DROP INDEX "uiux_blogs_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_uiux_blogs_id_idx";
  DROP INDEX "payload_locked_documents_rels_edtech_blogs_id_idx";
  DROP INDEX "payload_locked_documents_rels_product_blogs_id_idx";
  ALTER TABLE "blogs_tags" ADD CONSTRAINT "blogs_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_title" ADD CONSTRAINT "blogs_blocks_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_text" ADD CONSTRAINT "blogs_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_horizontal_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_horizontal_gallery_items" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_horizontal_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_horizontal_gallery" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_image" ADD CONSTRAINT "blogs_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_image" ADD CONSTRAINT "blogs_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_youtube" ADD CONSTRAINT "blogs_blocks_youtube_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_document" ADD CONSTRAINT "blogs_blocks_document_document_id_document_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_document" ADD CONSTRAINT "blogs_blocks_document_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_text_image" ADD CONSTRAINT "blogs_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_text_image" ADD CONSTRAINT "blogs_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_horizontal_scroll" ADD CONSTRAINT "blogs_blocks_horizontal_scroll_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_horizontal_scroll" ADD CONSTRAINT "blogs_blocks_horizontal_scroll_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_slide_show_images" ADD CONSTRAINT "blogs_blocks_slide_show_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_slide_show_images" ADD CONSTRAINT "blogs_blocks_slide_show_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_slide_show"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_slide_show" ADD CONSTRAINT "blogs_blocks_slide_show_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_small_gallery_items" ADD CONSTRAINT "blogs_blocks_small_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_small_gallery_items" ADD CONSTRAINT "blogs_blocks_small_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_small_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_small_gallery" ADD CONSTRAINT "blogs_blocks_small_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "blogs_blocks_equal_height_images_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_equal_height_images_items_images" ADD CONSTRAINT "blogs_blocks_equal_height_images_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_equal_height_images_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_equal_height_images_items" ADD CONSTRAINT "blogs_blocks_equal_height_images_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_equal_height_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_equal_height_images" ADD CONSTRAINT "blogs_blocks_equal_height_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "blogs_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "blogs_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_image_text_images" ADD CONSTRAINT "blogs_blocks_image_text_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_image_text_images" ADD CONSTRAINT "blogs_blocks_image_text_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_image_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_image_text" ADD CONSTRAINT "blogs_blocks_image_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_carousel_items" ADD CONSTRAINT "blogs_blocks_carousel_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_carousel_items" ADD CONSTRAINT "blogs_blocks_carousel_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_carousel" ADD CONSTRAINT "blogs_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_button" ADD CONSTRAINT "blogs_blocks_button_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_embed" ADD CONSTRAINT "blogs_blocks_embed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_testimonial" ADD CONSTRAINT "blogs_blocks_testimonial_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_testimonial" ADD CONSTRAINT "blogs_blocks_testimonial_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_emphasis_text" ADD CONSTRAINT "blogs_blocks_emphasis_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_ii" ADD CONSTRAINT "blogs_ii_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_column" ADD CONSTRAINT "blogs_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_row_2" ADD CONSTRAINT "blogs_blocks_row_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_row" ADD CONSTRAINT "blogs_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "blogs_tags_order_idx" ON "blogs_tags" USING btree ("_order");
  CREATE INDEX "blogs_tags_parent_id_idx" ON "blogs_tags" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_title_order_idx" ON "blogs_blocks_title" USING btree ("_order");
  CREATE INDEX "blogs_blocks_title_parent_id_idx" ON "blogs_blocks_title" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_title_path_idx" ON "blogs_blocks_title" USING btree ("_path");
  CREATE INDEX "blogs_blocks_text_order_idx" ON "blogs_blocks_text" USING btree ("_order");
  CREATE INDEX "blogs_blocks_text_parent_id_idx" ON "blogs_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_text_path_idx" ON "blogs_blocks_text" USING btree ("_path");
  CREATE INDEX "blogs_blocks_horizontal_gallery_items_images_order_idx" ON "blogs_blocks_horizontal_gallery_items_images" USING btree ("_order");
  CREATE INDEX "blogs_blocks_horizontal_gallery_items_images_parent_id_idx" ON "blogs_blocks_horizontal_gallery_items_images" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_horizontal_gallery_items_images_image_idx" ON "blogs_blocks_horizontal_gallery_items_images" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_horizontal_gallery_items_order_idx" ON "blogs_blocks_horizontal_gallery_items" USING btree ("_order");
  CREATE INDEX "blogs_blocks_horizontal_gallery_items_parent_id_idx" ON "blogs_blocks_horizontal_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_horizontal_gallery_order_idx" ON "blogs_blocks_horizontal_gallery" USING btree ("_order");
  CREATE INDEX "blogs_blocks_horizontal_gallery_parent_id_idx" ON "blogs_blocks_horizontal_gallery" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_horizontal_gallery_path_idx" ON "blogs_blocks_horizontal_gallery" USING btree ("_path");
  CREATE INDEX "blogs_blocks_image_order_idx" ON "blogs_blocks_image" USING btree ("_order");
  CREATE INDEX "blogs_blocks_image_parent_id_idx" ON "blogs_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_image_path_idx" ON "blogs_blocks_image" USING btree ("_path");
  CREATE INDEX "blogs_blocks_image_image_idx" ON "blogs_blocks_image" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_youtube_order_idx" ON "blogs_blocks_youtube" USING btree ("_order");
  CREATE INDEX "blogs_blocks_youtube_parent_id_idx" ON "blogs_blocks_youtube" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_youtube_path_idx" ON "blogs_blocks_youtube" USING btree ("_path");
  CREATE INDEX "blogs_blocks_document_order_idx" ON "blogs_blocks_document" USING btree ("_order");
  CREATE INDEX "blogs_blocks_document_parent_id_idx" ON "blogs_blocks_document" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_document_path_idx" ON "blogs_blocks_document" USING btree ("_path");
  CREATE INDEX "blogs_blocks_document_document_idx" ON "blogs_blocks_document" USING btree ("document_id");
  CREATE INDEX "blogs_blocks_text_image_order_idx" ON "blogs_blocks_text_image" USING btree ("_order");
  CREATE INDEX "blogs_blocks_text_image_parent_id_idx" ON "blogs_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_text_image_path_idx" ON "blogs_blocks_text_image" USING btree ("_path");
  CREATE INDEX "blogs_blocks_text_image_image_idx" ON "blogs_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_horizontal_scroll_order_idx" ON "blogs_blocks_horizontal_scroll" USING btree ("_order");
  CREATE INDEX "blogs_blocks_horizontal_scroll_parent_id_idx" ON "blogs_blocks_horizontal_scroll" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_horizontal_scroll_path_idx" ON "blogs_blocks_horizontal_scroll" USING btree ("_path");
  CREATE INDEX "blogs_blocks_horizontal_scroll_image_idx" ON "blogs_blocks_horizontal_scroll" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_slide_show_images_order_idx" ON "blogs_blocks_slide_show_images" USING btree ("_order");
  CREATE INDEX "blogs_blocks_slide_show_images_parent_id_idx" ON "blogs_blocks_slide_show_images" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_slide_show_images_image_idx" ON "blogs_blocks_slide_show_images" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_slide_show_order_idx" ON "blogs_blocks_slide_show" USING btree ("_order");
  CREATE INDEX "blogs_blocks_slide_show_parent_id_idx" ON "blogs_blocks_slide_show" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_slide_show_path_idx" ON "blogs_blocks_slide_show" USING btree ("_path");
  CREATE INDEX "blogs_blocks_small_gallery_items_order_idx" ON "blogs_blocks_small_gallery_items" USING btree ("_order");
  CREATE INDEX "blogs_blocks_small_gallery_items_parent_id_idx" ON "blogs_blocks_small_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_small_gallery_items_image_idx" ON "blogs_blocks_small_gallery_items" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_small_gallery_order_idx" ON "blogs_blocks_small_gallery" USING btree ("_order");
  CREATE INDEX "blogs_blocks_small_gallery_parent_id_idx" ON "blogs_blocks_small_gallery" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_small_gallery_path_idx" ON "blogs_blocks_small_gallery" USING btree ("_path");
  CREATE INDEX "blogs_blocks_equal_height_images_items_images_order_idx" ON "blogs_blocks_equal_height_images_items_images" USING btree ("_order");
  CREATE INDEX "blogs_blocks_equal_height_images_items_images_parent_id_idx" ON "blogs_blocks_equal_height_images_items_images" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_equal_height_images_items_images_image_idx" ON "blogs_blocks_equal_height_images_items_images" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_equal_height_images_items_order_idx" ON "blogs_blocks_equal_height_images_items" USING btree ("_order");
  CREATE INDEX "blogs_blocks_equal_height_images_items_parent_id_idx" ON "blogs_blocks_equal_height_images_items" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_equal_height_images_order_idx" ON "blogs_blocks_equal_height_images" USING btree ("_order");
  CREATE INDEX "blogs_blocks_equal_height_images_parent_id_idx" ON "blogs_blocks_equal_height_images" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_equal_height_images_path_idx" ON "blogs_blocks_equal_height_images" USING btree ("_path");
  CREATE INDEX "blogs_blocks_image_with_text_overlay_order_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX "blogs_blocks_image_with_text_overlay_parent_id_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_image_with_text_overlay_path_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX "blogs_blocks_image_with_text_overlay_image_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_image_text_images_order_idx" ON "blogs_blocks_image_text_images" USING btree ("_order");
  CREATE INDEX "blogs_blocks_image_text_images_parent_id_idx" ON "blogs_blocks_image_text_images" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_image_text_images_image_idx" ON "blogs_blocks_image_text_images" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_image_text_order_idx" ON "blogs_blocks_image_text" USING btree ("_order");
  CREATE INDEX "blogs_blocks_image_text_parent_id_idx" ON "blogs_blocks_image_text" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_image_text_path_idx" ON "blogs_blocks_image_text" USING btree ("_path");
  CREATE INDEX "blogs_blocks_carousel_items_order_idx" ON "blogs_blocks_carousel_items" USING btree ("_order");
  CREATE INDEX "blogs_blocks_carousel_items_parent_id_idx" ON "blogs_blocks_carousel_items" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_carousel_items_image_idx" ON "blogs_blocks_carousel_items" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_carousel_order_idx" ON "blogs_blocks_carousel" USING btree ("_order");
  CREATE INDEX "blogs_blocks_carousel_parent_id_idx" ON "blogs_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_carousel_path_idx" ON "blogs_blocks_carousel" USING btree ("_path");
  CREATE INDEX "blogs_blocks_button_order_idx" ON "blogs_blocks_button" USING btree ("_order");
  CREATE INDEX "blogs_blocks_button_parent_id_idx" ON "blogs_blocks_button" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_button_path_idx" ON "blogs_blocks_button" USING btree ("_path");
  CREATE INDEX "blogs_blocks_embed_order_idx" ON "blogs_blocks_embed" USING btree ("_order");
  CREATE INDEX "blogs_blocks_embed_parent_id_idx" ON "blogs_blocks_embed" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_embed_path_idx" ON "blogs_blocks_embed" USING btree ("_path");
  CREATE INDEX "blogs_blocks_testimonial_order_idx" ON "blogs_blocks_testimonial" USING btree ("_order");
  CREATE INDEX "blogs_blocks_testimonial_parent_id_idx" ON "blogs_blocks_testimonial" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_testimonial_path_idx" ON "blogs_blocks_testimonial" USING btree ("_path");
  CREATE INDEX "blogs_blocks_testimonial_avatar_idx" ON "blogs_blocks_testimonial" USING btree ("avatar_id");
  CREATE INDEX "blogs_blocks_emphasis_text_order_idx" ON "blogs_blocks_emphasis_text" USING btree ("_order");
  CREATE INDEX "blogs_blocks_emphasis_text_parent_id_idx" ON "blogs_blocks_emphasis_text" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_emphasis_text_path_idx" ON "blogs_blocks_emphasis_text" USING btree ("_path");
  CREATE INDEX "blogs_blocks_column_order_idx" ON "blogs_blocks_column" USING btree ("_order");
  CREATE INDEX "blogs_blocks_column_parent_id_idx" ON "blogs_blocks_column" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_column_path_idx" ON "blogs_blocks_column" USING btree ("_path");
  CREATE INDEX "blogs_blocks_row_2_order_idx" ON "blogs_blocks_row_2" USING btree ("_order");
  CREATE INDEX "blogs_blocks_row_2_parent_id_idx" ON "blogs_blocks_row_2" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_row_2_path_idx" ON "blogs_blocks_row_2" USING btree ("_path");
  CREATE INDEX "blogs_blocks_row_order_idx" ON "blogs_blocks_row" USING btree ("_order");
  CREATE INDEX "blogs_blocks_row_parent_id_idx" ON "blogs_blocks_row" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_row_path_idx" ON "blogs_blocks_row" USING btree ("_path");
  CREATE INDEX "blogs_cover_image_idx" ON "blogs" USING btree ("cover_image_id");
  CREATE INDEX "blogs_updated_at_idx" ON "blogs" USING btree ("updated_at");
  CREATE INDEX "blogs_created_at_idx" ON "blogs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("blogs_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "edtech_blogs_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "product_blogs_id";
  DROP TYPE "public"."enum_edtech_blogs_blocks_title_title_type";
  DROP TYPE "public"."enum_edtech_blogs_blocks_title_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_title_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_text_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_text_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_horizontal_gallery_spacing";
  DROP TYPE "public"."enum_edtech_blogs_blocks_horizontal_gallery_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_horizontal_gallery_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_image_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_youtube_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_document_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_text_image_title_type";
  DROP TYPE "public"."enum_edtech_blogs_blocks_text_image_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_text_image_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_horizontal_scroll_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_horizontal_scroll_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_slide_show_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_small_gallery_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_small_gallery_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_equal_height_images_spacing";
  DROP TYPE "public"."enum_edtech_blogs_blocks_equal_height_images_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_image_with_text_overlay_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_image_with_text_overlay_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_image_text_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_image_text_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_carousel_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_carousel_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_button_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_embed_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_testimonial_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_emphasis_text_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_emphasis_text_text_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_column_spacing";
  DROP TYPE "public"."enum_edtech_blogs_blocks_column_justify";
  DROP TYPE "public"."enum_edtech_blogs_blocks_column_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_row_2_spacing";
  DROP TYPE "public"."enum_edtech_blogs_blocks_row_2_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_row_2_alignment";
  DROP TYPE "public"."enum_edtech_blogs_blocks_row_spacing";
  DROP TYPE "public"."enum_edtech_blogs_blocks_row_bottom_margin";
  DROP TYPE "public"."enum_edtech_blogs_blocks_row_alignment";
  DROP TYPE "public"."enum_product_blogs_blocks_title_title_type";
  DROP TYPE "public"."enum_product_blogs_blocks_title_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_title_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_text_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_text_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_horizontal_gallery_spacing";
  DROP TYPE "public"."enum_product_blogs_blocks_horizontal_gallery_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_horizontal_gallery_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_image_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_youtube_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_document_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_text_image_title_type";
  DROP TYPE "public"."enum_product_blogs_blocks_text_image_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_text_image_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_horizontal_scroll_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_horizontal_scroll_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_slide_show_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_small_gallery_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_small_gallery_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_equal_height_images_spacing";
  DROP TYPE "public"."enum_product_blogs_blocks_equal_height_images_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_image_with_text_overlay_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_image_with_text_overlay_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_image_text_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_image_text_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_carousel_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_carousel_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_button_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_embed_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_testimonial_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_emphasis_text_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_emphasis_text_text_color";
  DROP TYPE "public"."enum_product_blogs_blocks_column_spacing";
  DROP TYPE "public"."enum_product_blogs_blocks_column_justify";
  DROP TYPE "public"."enum_product_blogs_blocks_column_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_row_2_spacing";
  DROP TYPE "public"."enum_product_blogs_blocks_row_2_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_row_2_alignment";
  DROP TYPE "public"."enum_product_blogs_blocks_row_spacing";
  DROP TYPE "public"."enum_product_blogs_blocks_row_bottom_margin";
  DROP TYPE "public"."enum_product_blogs_blocks_row_alignment";`)
}
