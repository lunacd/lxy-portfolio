import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_product_projects_image_overlay_type" AS ENUM('dark', 'light', 'none');
  CREATE TYPE "public"."enum_product_projects_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_product_projects_banner_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_product_projects_content_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_edtech_projects_image_overlay_type" AS ENUM('dark', 'light', 'none');
  CREATE TYPE "public"."enum_edtech_projects_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_edtech_projects_banner_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_edtech_projects_content_color" AS ENUM('light', 'dark');
  ALTER TYPE "public"."enum_projects_image_overlay_type" RENAME TO "enum_uiux_projects_image_overlay_type";
  ALTER TYPE "public"."enum_projects_text_color" RENAME TO "enum_uiux_projects_text_color";
  ALTER TYPE "public"."enum_projects_banner_text_color" RENAME TO "enum_uiux_projects_banner_text_color";
  ALTER TYPE "public"."enum_projects_content_color" RENAME TO "enum_uiux_projects_content_color";
  CREATE TABLE "product_projects_focuses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"focus" varchar NOT NULL,
  	"focus_id" varchar NOT NULL
  );
  INSERT INTO "product_projects_focuses" (_order, _parent_id, id, focus, focus_id)
  SELECT _order, _parent_id, id, focus, focus_id
  FROM "projects_focuses";

  CREATE TABLE "product_projects_related_works" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"related_work_id" integer NOT NULL
  );
  INSERT INTO "product_projects_related_works" (_order, _parent_id, id, related_work_id)
  SELECT _order, _parent_id, id, related_work_id
  FROM "projects_related_works";

  CREATE TABLE "product_projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"uri" varchar NOT NULL,
  	"order" numeric DEFAULT 0 NOT NULL,
  	"is_main_project" boolean DEFAULT true NOT NULL,
  	"duration" varchar,
  	"category" varchar NOT NULL,
  	"flavor" varchar DEFAULT '' NOT NULL,
  	"project_size" varchar,
  	"brief" varchar,
  	"project_image_id" integer,
  	"project_gallery_image_id" integer NOT NULL,
  	"background_color" varchar,
  	"page_background_color" varchar,
  	"image_cover" boolean,
  	"image_overlay_type" "enum_product_projects_image_overlay_type" DEFAULT 'none' NOT NULL,
  	"award_image_id" integer,
  	"external_link" varchar,
  	"text_color" "enum_product_projects_text_color" DEFAULT 'dark' NOT NULL,
  	"banner_text_color" "enum_product_projects_banner_text_color" DEFAULT 'dark' NOT NULL,
  	"content_color" "enum_product_projects_content_color" DEFAULT 'dark' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  INSERT INTO "product_projects" (
    id,
    name,
    uri,
    "order",
    "is_main_project",
    duration,
    category,
    flavor,
    "project_size",
    brief,
    "project_image_id",
    "project_gallery_image_id",
    "background_color",
    "page_background_color",
    "image_cover",
    "image_overlay_type",
    "award_image_id",
    "external_link",
    "text_color",
    "banner_text_color",
    "content_color",
    "updated_at",
    "created_at"
  )
  SELECT
    id,
    name,
    uri,
    "order",
    "is_main_project",
    duration,
    category,
    flavor,
    "project_size",
    brief,
    "project_image_id",
    "project_gallery_image_id",
    "background_color",
    "page_background_color",
    "image_cover",
    "image_overlay_type"::TEXT::"enum_product_projects_image_overlay_type",
    "award_image_id",
    "external_link",
    "text_color"::TEXT::"enum_product_projects_text_color",
    "banner_text_color"::TEXT::"enum_product_projects_banner_text_color",
    "content_color"::TEXT::"enum_product_projects_content_color",
    "updated_at",
    "created_at"
  FROM "projects";

  CREATE TABLE "edtech_projects_focuses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"focus" varchar NOT NULL,
  	"focus_id" varchar NOT NULL
  );
  INSERT INTO "edtech_projects_focuses" (_order, _parent_id, id, focus, focus_id)
  SELECT _order, _parent_id, id, focus, focus_id
  FROM "projects_focuses";

  CREATE TABLE "edtech_projects_related_works" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"related_work_id" integer NOT NULL
  );
  INSERT INTO "edtech_projects_related_works" (_order, _parent_id, id, related_work_id)
  SELECT _order, _parent_id, id, related_work_id
  FROM "projects_related_works";

  CREATE TABLE "edtech_projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"uri" varchar NOT NULL,
  	"order" numeric DEFAULT 0 NOT NULL,
  	"is_main_project" boolean DEFAULT true NOT NULL,
  	"duration" varchar,
  	"category" varchar NOT NULL,
  	"flavor" varchar DEFAULT '' NOT NULL,
  	"project_size" varchar,
  	"brief" varchar,
  	"project_image_id" integer,
  	"project_gallery_image_id" integer NOT NULL,
  	"background_color" varchar,
  	"page_background_color" varchar,
  	"image_cover" boolean,
  	"image_overlay_type" "enum_edtech_projects_image_overlay_type" DEFAULT 'none' NOT NULL,
  	"award_image_id" integer,
  	"external_link" varchar,
  	"text_color" "enum_edtech_projects_text_color" DEFAULT 'dark' NOT NULL,
  	"banner_text_color" "enum_edtech_projects_banner_text_color" DEFAULT 'dark' NOT NULL,
  	"content_color" "enum_edtech_projects_content_color" DEFAULT 'dark' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  INSERT INTO "edtech_projects" (
    id,
    name,
    uri,
    "order",
    "is_main_project",
    duration,
    category,
    flavor,
    "project_size",
    brief,
    "project_image_id",
    "project_gallery_image_id",
    "background_color",
    "page_background_color",
    "image_cover",
    "image_overlay_type",
    "award_image_id",
    "external_link",
    "text_color",
    "banner_text_color",
    "content_color",
    "updated_at",
    "created_at"
  )
  SELECT
    id,
    name,
    uri,
    "order",
    "is_main_project",
    duration,
    category,
    flavor,
    "project_size",
    brief,
    "project_image_id",
    "project_gallery_image_id",
    "background_color",
    "page_background_color",
    "image_cover",
    "image_overlay_type"::TEXT::"enum_edtech_projects_image_overlay_type",
    "award_image_id",
    "external_link",
    "text_color"::TEXT::"enum_edtech_projects_text_color",
    "banner_text_color"::TEXT::"enum_edtech_projects_banner_text_color",
    "content_color"::TEXT::"enum_edtech_projects_content_color",
    "updated_at",
    "created_at"
  FROM "projects";

  ALTER TABLE "projects_focuses" RENAME TO "uiux_projects_focuses";
  ALTER TABLE "projects_related_works" RENAME TO "uiux_projects_related_works";
  ALTER TABLE "projects" RENAME TO "uiux_projects";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "projects_id" TO "uiux_projects_id";
  ALTER TABLE "uiux_projects_focuses" DROP CONSTRAINT "projects_focuses_parent_id_fk";
  
  ALTER TABLE "uiux_projects_related_works" DROP CONSTRAINT "projects_related_works_related_work_id_projects_id_fk";
  
  ALTER TABLE "uiux_projects_related_works" DROP CONSTRAINT "projects_related_works_parent_id_fk";
  
  ALTER TABLE "uiux_projects" DROP CONSTRAINT "projects_project_image_id_media_id_fk";
  
  ALTER TABLE "uiux_projects" DROP CONSTRAINT "projects_project_gallery_image_id_media_id_fk";
  
  ALTER TABLE "uiux_projects" DROP CONSTRAINT "projects_award_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_projects_fk";
  
  DROP INDEX "projects_focuses_order_idx";
  DROP INDEX "projects_focuses_parent_id_idx";
  DROP INDEX "projects_related_works_order_idx";
  DROP INDEX "projects_related_works_parent_id_idx";
  DROP INDEX "projects_related_works_related_work_idx";
  DROP INDEX "project_pages_blocks_horizontal_gallery_items_images_image_idx";
  DROP INDEX "project_pages_blocks_equal_height_images_items_images_image_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "product_projects_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "edtech_projects_id" integer;
  ALTER TABLE "product_projects_focuses" ADD CONSTRAINT "product_projects_focuses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_projects_related_works" ADD CONSTRAINT "product_projects_related_works_related_work_id_product_projects_id_fk" FOREIGN KEY ("related_work_id") REFERENCES "public"."product_projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_projects_related_works" ADD CONSTRAINT "product_projects_related_works_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."product_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "product_projects" ADD CONSTRAINT "product_projects_project_image_id_media_id_fk" FOREIGN KEY ("project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_projects" ADD CONSTRAINT "product_projects_project_gallery_image_id_media_id_fk" FOREIGN KEY ("project_gallery_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "product_projects" ADD CONSTRAINT "product_projects_award_image_id_media_id_fk" FOREIGN KEY ("award_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_projects_focuses" ADD CONSTRAINT "edtech_projects_focuses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_projects_related_works" ADD CONSTRAINT "edtech_projects_related_works_related_work_id_edtech_projects_id_fk" FOREIGN KEY ("related_work_id") REFERENCES "public"."edtech_projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_projects_related_works" ADD CONSTRAINT "edtech_projects_related_works_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edtech_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edtech_projects" ADD CONSTRAINT "edtech_projects_project_image_id_media_id_fk" FOREIGN KEY ("project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_projects" ADD CONSTRAINT "edtech_projects_project_gallery_image_id_media_id_fk" FOREIGN KEY ("project_gallery_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edtech_projects" ADD CONSTRAINT "edtech_projects_award_image_id_media_id_fk" FOREIGN KEY ("award_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "product_projects_focuses_order_idx" ON "product_projects_focuses" USING btree ("_order");
  CREATE INDEX "product_projects_focuses_parent_id_idx" ON "product_projects_focuses" USING btree ("_parent_id");
  CREATE INDEX "product_projects_focuses_focus_id_idx" ON "product_projects_focuses" USING btree ("focus_id");
  CREATE INDEX "product_projects_related_works_order_idx" ON "product_projects_related_works" USING btree ("_order");
  CREATE INDEX "product_projects_related_works_parent_id_idx" ON "product_projects_related_works" USING btree ("_parent_id");
  CREATE INDEX "product_projects_related_works_related_work_idx" ON "product_projects_related_works" USING btree ("related_work_id");
  CREATE UNIQUE INDEX "product_projects_name_idx" ON "product_projects" USING btree ("name");
  CREATE UNIQUE INDEX "product_projects_uri_idx" ON "product_projects" USING btree ("uri");
  CREATE INDEX "product_projects_is_main_project_idx" ON "product_projects" USING btree ("is_main_project");
  CREATE INDEX "product_projects_project_image_idx" ON "product_projects" USING btree ("project_image_id");
  CREATE INDEX "product_projects_project_gallery_image_idx" ON "product_projects" USING btree ("project_gallery_image_id");
  CREATE INDEX "product_projects_award_image_idx" ON "product_projects" USING btree ("award_image_id");
  CREATE INDEX "product_projects_updated_at_idx" ON "product_projects" USING btree ("updated_at");
  CREATE INDEX "product_projects_created_at_idx" ON "product_projects" USING btree ("created_at");
  CREATE INDEX "edtech_projects_focuses_order_idx" ON "edtech_projects_focuses" USING btree ("_order");
  CREATE INDEX "edtech_projects_focuses_parent_id_idx" ON "edtech_projects_focuses" USING btree ("_parent_id");
  CREATE INDEX "edtech_projects_focuses_focus_id_idx" ON "edtech_projects_focuses" USING btree ("focus_id");
  CREATE INDEX "edtech_projects_related_works_order_idx" ON "edtech_projects_related_works" USING btree ("_order");
  CREATE INDEX "edtech_projects_related_works_parent_id_idx" ON "edtech_projects_related_works" USING btree ("_parent_id");
  CREATE INDEX "edtech_projects_related_works_related_work_idx" ON "edtech_projects_related_works" USING btree ("related_work_id");
  CREATE UNIQUE INDEX "edtech_projects_name_idx" ON "edtech_projects" USING btree ("name");
  CREATE UNIQUE INDEX "edtech_projects_uri_idx" ON "edtech_projects" USING btree ("uri");
  CREATE INDEX "edtech_projects_is_main_project_idx" ON "edtech_projects" USING btree ("is_main_project");
  CREATE INDEX "edtech_projects_project_image_idx" ON "edtech_projects" USING btree ("project_image_id");
  CREATE INDEX "edtech_projects_project_gallery_image_idx" ON "edtech_projects" USING btree ("project_gallery_image_id");
  CREATE INDEX "edtech_projects_award_image_idx" ON "edtech_projects" USING btree ("award_image_id");
  CREATE INDEX "edtech_projects_updated_at_idx" ON "edtech_projects" USING btree ("updated_at");
  CREATE INDEX "edtech_projects_created_at_idx" ON "edtech_projects" USING btree ("created_at");
  ALTER TABLE "uiux_projects_focuses" ADD CONSTRAINT "uiux_projects_focuses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_projects_related_works" ADD CONSTRAINT "uiux_projects_related_works_related_work_id_uiux_projects_id_fk" FOREIGN KEY ("related_work_id") REFERENCES "public"."uiux_projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_projects_related_works" ADD CONSTRAINT "uiux_projects_related_works_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."uiux_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "uiux_projects" ADD CONSTRAINT "uiux_projects_project_image_id_media_id_fk" FOREIGN KEY ("project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_projects" ADD CONSTRAINT "uiux_projects_project_gallery_image_id_media_id_fk" FOREIGN KEY ("project_gallery_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "uiux_projects" ADD CONSTRAINT "uiux_projects_award_image_id_media_id_fk" FOREIGN KEY ("award_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_uiux_projects_fk" FOREIGN KEY ("uiux_projects_id") REFERENCES "public"."uiux_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_product_projects_fk" FOREIGN KEY ("product_projects_id") REFERENCES "public"."product_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_edtech_projects_fk" FOREIGN KEY ("edtech_projects_id") REFERENCES "public"."edtech_projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "uiux_projects_focuses_order_idx" ON "uiux_projects_focuses" USING btree ("_order");
  CREATE INDEX "uiux_projects_focuses_parent_id_idx" ON "uiux_projects_focuses" USING btree ("_parent_id");
  CREATE INDEX "uiux_projects_focuses_focus_id_idx" ON "uiux_projects_focuses" USING btree ("focus_id");
  CREATE INDEX "uiux_projects_related_works_order_idx" ON "uiux_projects_related_works" USING btree ("_order");
  CREATE INDEX "uiux_projects_related_works_parent_id_idx" ON "uiux_projects_related_works" USING btree ("_parent_id");
  CREATE INDEX "uiux_projects_related_works_related_work_idx" ON "uiux_projects_related_works" USING btree ("related_work_id");
  CREATE UNIQUE INDEX "uiux_projects_name_idx" ON "uiux_projects" USING btree ("name");
  CREATE UNIQUE INDEX "uiux_projects_uri_idx" ON "uiux_projects" USING btree ("uri");
  CREATE INDEX "uiux_projects_is_main_project_idx" ON "uiux_projects" USING btree ("is_main_project");
  CREATE INDEX "uiux_projects_project_image_idx" ON "uiux_projects" USING btree ("project_image_id");
  CREATE INDEX "uiux_projects_project_gallery_image_idx" ON "uiux_projects" USING btree ("project_gallery_image_id");
  CREATE INDEX "uiux_projects_award_image_idx" ON "uiux_projects" USING btree ("award_image_id");
  CREATE INDEX "uiux_projects_updated_at_idx" ON "uiux_projects" USING btree ("updated_at");
  CREATE INDEX "uiux_projects_created_at_idx" ON "uiux_projects" USING btree ("created_at");
  CREATE INDEX "project_pages_blocks_horizontal_gallery_items_images_ima_idx" ON "project_pages_blocks_horizontal_gallery_items_images" USING btree ("image_id");
  CREATE INDEX "project_pages_blocks_equal_height_images_items_images_im_idx" ON "project_pages_blocks_equal_height_images_items_images" USING btree ("image_id");
  CREATE INDEX "payload_locked_documents_rels_uiux_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("uiux_projects_id");
  CREATE INDEX "payload_locked_documents_rels_product_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("product_projects_id");
  CREATE INDEX "payload_locked_documents_rels_edtech_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("edtech_projects_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_uiux_projects_image_overlay_type" RENAME TO "enum_projects_image_overlay_type";
  ALTER TYPE "public"."enum_uiux_projects_text_color" RENAME TO "enum_projects_text_color";
  ALTER TYPE "public"."enum_uiux_projects_banner_text_color" RENAME TO "enum_projects_banner_text_color";
  ALTER TYPE "public"."enum_uiux_projects_content_color" RENAME TO "enum_projects_content_color";
  ALTER TABLE "product_projects_focuses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_projects_related_works" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "product_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_projects_focuses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_projects_related_works" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "edtech_projects" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "product_projects_focuses" CASCADE;
  DROP TABLE "product_projects_related_works" CASCADE;
  DROP TABLE "product_projects" CASCADE;
  DROP TABLE "edtech_projects_focuses" CASCADE;
  DROP TABLE "edtech_projects_related_works" CASCADE;
  DROP TABLE "edtech_projects" CASCADE;
  ALTER TABLE "uiux_projects_focuses" RENAME TO "projects_focuses";
  ALTER TABLE "uiux_projects_related_works" RENAME TO "projects_related_works";
  ALTER TABLE "uiux_projects" RENAME TO "projects";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "uiux_projects_id" TO "projects_id";
  ALTER TABLE "projects_focuses" DROP CONSTRAINT "uiux_projects_focuses_parent_id_fk";
  
  ALTER TABLE "projects_related_works" DROP CONSTRAINT "uiux_projects_related_works_related_work_id_uiux_projects_id_fk";
  
  ALTER TABLE "projects_related_works" DROP CONSTRAINT "uiux_projects_related_works_parent_id_fk";
  
  ALTER TABLE "projects" DROP CONSTRAINT "uiux_projects_project_image_id_media_id_fk";
  
  ALTER TABLE "projects" DROP CONSTRAINT "uiux_projects_project_gallery_image_id_media_id_fk";
  
  ALTER TABLE "projects" DROP CONSTRAINT "uiux_projects_award_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_uiux_projects_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_product_projects_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_edtech_projects_fk";
  
  DROP INDEX "uiux_projects_focuses_order_idx";
  DROP INDEX "uiux_projects_focuses_parent_id_idx";
  DROP INDEX "uiux_projects_focuses_focus_id_idx";
  DROP INDEX "uiux_projects_related_works_order_idx";
  DROP INDEX "uiux_projects_related_works_parent_id_idx";
  DROP INDEX "uiux_projects_related_works_related_work_idx";
  DROP INDEX "uiux_projects_name_idx";
  DROP INDEX "uiux_projects_uri_idx";
  DROP INDEX "uiux_projects_is_main_project_idx";
  DROP INDEX "uiux_projects_project_image_idx";
  DROP INDEX "uiux_projects_project_gallery_image_idx";
  DROP INDEX "uiux_projects_award_image_idx";
  DROP INDEX "uiux_projects_updated_at_idx";
  DROP INDEX "uiux_projects_created_at_idx";
  DROP INDEX "project_pages_blocks_horizontal_gallery_items_images_ima_idx";
  DROP INDEX "project_pages_blocks_equal_height_images_items_images_im_idx";
  DROP INDEX "payload_locked_documents_rels_uiux_projects_id_idx";
  DROP INDEX "payload_locked_documents_rels_product_projects_id_idx";
  DROP INDEX "payload_locked_documents_rels_edtech_projects_id_idx";
  ALTER TABLE "projects_focuses" ADD CONSTRAINT "projects_focuses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_related_works" ADD CONSTRAINT "projects_related_works_related_work_id_projects_id_fk" FOREIGN KEY ("related_work_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_related_works" ADD CONSTRAINT "projects_related_works_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_project_image_id_media_id_fk" FOREIGN KEY ("project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_project_gallery_image_id_media_id_fk" FOREIGN KEY ("project_gallery_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_award_image_id_media_id_fk" FOREIGN KEY ("award_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_focuses_order_idx" ON "projects_focuses" USING btree ("_order");
  CREATE INDEX "projects_focuses_parent_id_idx" ON "projects_focuses" USING btree ("_parent_id");
  CREATE INDEX "projects_focuses_focus_id_idx" ON "projects_focuses" USING btree ("focus_id");
  CREATE INDEX "projects_related_works_order_idx" ON "projects_related_works" USING btree ("_order");
  CREATE INDEX "projects_related_works_parent_id_idx" ON "projects_related_works" USING btree ("_parent_id");
  CREATE INDEX "projects_related_works_related_work_idx" ON "projects_related_works" USING btree ("related_work_id");
  CREATE UNIQUE INDEX "projects_name_idx" ON "projects" USING btree ("name");
  CREATE UNIQUE INDEX "projects_uri_idx" ON "projects" USING btree ("uri");
  CREATE INDEX "projects_is_main_project_idx" ON "projects" USING btree ("is_main_project");
  CREATE INDEX "projects_project_image_idx" ON "projects" USING btree ("project_image_id");
  CREATE INDEX "projects_project_gallery_image_idx" ON "projects" USING btree ("project_gallery_image_id");
  CREATE INDEX "projects_award_image_idx" ON "projects" USING btree ("award_image_id");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "project_pages_blocks_horizontal_gallery_items_images_image_idx" ON "project_pages_blocks_horizontal_gallery_items_images" USING btree ("image_id");
  CREATE INDEX "project_pages_blocks_equal_height_images_items_images_image_idx" ON "project_pages_blocks_equal_height_images_items_images" USING btree ("image_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "product_projects_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "edtech_projects_id";
  DROP TYPE "public"."enum_product_projects_image_overlay_type";
  DROP TYPE "public"."enum_product_projects_text_color";
  DROP TYPE "public"."enum_product_projects_banner_text_color";
  DROP TYPE "public"."enum_product_projects_content_color";
  DROP TYPE "public"."enum_edtech_projects_image_overlay_type";
  DROP TYPE "public"."enum_edtech_projects_text_color";
  DROP TYPE "public"."enum_edtech_projects_banner_text_color";
  DROP TYPE "public"."enum_edtech_projects_content_color";`)
}
