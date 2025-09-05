import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_all_projects_image_overlay_type" AS ENUM('dark', 'light', 'none');
  CREATE TYPE "public"."enum_all_projects_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_all_projects_banner_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_all_projects_content_color" AS ENUM('light', 'dark');
  CREATE TABLE "all_projects_focuses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"focus" varchar NOT NULL,
  	"focus_id" varchar NOT NULL
  );
  INSERT INTO "all_projects_focuses" ("_order", "_parent_id", "id", "focus", "focus_id")
  SELECT "_order", "_parent_id", "id", "focus", "focus_id" FROM "uiux_projects_focuses";
  
  CREATE TABLE "all_projects_related_works" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"related_work_id" integer NOT NULL
  );
  INSERT INTO "all_projects_related_works" ("_order", "_parent_id", "id", "related_work_id")
  SELECT "_order", "_parent_id", "id", "related_work_id" FROM "uiux_projects_related_works";
  
  CREATE TABLE "all_projects" (
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
  	"image_overlay_type" "enum_all_projects_image_overlay_type" DEFAULT 'none' NOT NULL,
  	"award_image_id" integer,
  	"external_link" varchar,
  	"text_color" "enum_all_projects_text_color" DEFAULT 'dark' NOT NULL,
  	"banner_text_color" "enum_all_projects_banner_text_color" DEFAULT 'dark' NOT NULL,
  	"content_color" "enum_all_projects_content_color" DEFAULT 'dark' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  INSERT INTO "all_projects" ("id", "name", "uri", "order", "is_main_project", "duration", "category", "flavor", "project_size", "brief", "project_image_id", "project_gallery_image_id", "background_color", "page_background_color", "image_cover", "image_overlay_type", "award_image_id", "external_link", "text_color", "banner_text_color", "content_color", "updated_at", "created_at")
  SELECT "id", "name", "uri", "order", "is_main_project", "duration", "category", "flavor", "project_size", "brief", "project_image_id", "project_gallery_image_id", "background_color", "page_background_color", "image_cover",
    "image_overlay_type"::TEXT::"enum_all_projects_image_overlay_type",
    "award_image_id", "external_link", 
    "text_color"::TEXT::"enum_all_projects_text_color",
    "banner_text_color"::TEXT::"enum_all_projects_banner_text_color",
    "content_color"::TEXT::"enum_all_projects_content_color",
    "updated_at", "created_at" FROM "uiux_projects";

  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "all_projects_id" integer;
  ALTER TABLE "all_projects_focuses" ADD CONSTRAINT "all_projects_focuses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_projects_related_works" ADD CONSTRAINT "all_projects_related_works_related_work_id_uiux_projects_id_fk" FOREIGN KEY ("related_work_id") REFERENCES "public"."uiux_projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_projects_related_works" ADD CONSTRAINT "all_projects_related_works_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."all_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "all_projects" ADD CONSTRAINT "all_projects_project_image_id_media_id_fk" FOREIGN KEY ("project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_projects" ADD CONSTRAINT "all_projects_project_gallery_image_id_media_id_fk" FOREIGN KEY ("project_gallery_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "all_projects" ADD CONSTRAINT "all_projects_award_image_id_media_id_fk" FOREIGN KEY ("award_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "all_projects_focuses_order_idx" ON "all_projects_focuses" USING btree ("_order");
  CREATE INDEX "all_projects_focuses_parent_id_idx" ON "all_projects_focuses" USING btree ("_parent_id");
  CREATE INDEX "all_projects_focuses_focus_id_idx" ON "all_projects_focuses" USING btree ("focus_id");
  CREATE INDEX "all_projects_related_works_order_idx" ON "all_projects_related_works" USING btree ("_order");
  CREATE INDEX "all_projects_related_works_parent_id_idx" ON "all_projects_related_works" USING btree ("_parent_id");
  CREATE INDEX "all_projects_related_works_related_work_idx" ON "all_projects_related_works" USING btree ("related_work_id");
  CREATE UNIQUE INDEX "all_projects_name_idx" ON "all_projects" USING btree ("name");
  CREATE UNIQUE INDEX "all_projects_uri_idx" ON "all_projects" USING btree ("uri");
  CREATE INDEX "all_projects_is_main_project_idx" ON "all_projects" USING btree ("is_main_project");
  CREATE INDEX "all_projects_project_image_idx" ON "all_projects" USING btree ("project_image_id");
  CREATE INDEX "all_projects_project_gallery_image_idx" ON "all_projects" USING btree ("project_gallery_image_id");
  CREATE INDEX "all_projects_award_image_idx" ON "all_projects" USING btree ("award_image_id");
  CREATE INDEX "all_projects_updated_at_idx" ON "all_projects" USING btree ("updated_at");
  CREATE INDEX "all_projects_created_at_idx" ON "all_projects" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_all_projects_fk" FOREIGN KEY ("all_projects_id") REFERENCES "public"."all_projects"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_all_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("all_projects_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "all_projects_focuses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_projects_related_works" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "all_projects" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "all_projects_focuses" CASCADE;
  DROP TABLE "all_projects_related_works" CASCADE;
  DROP TABLE "all_projects" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_all_projects_fk";
  
  DROP INDEX "payload_locked_documents_rels_all_projects_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "all_projects_id";
  DROP TYPE "public"."enum_all_projects_image_overlay_type";
  DROP TYPE "public"."enum_all_projects_text_color";
  DROP TYPE "public"."enum_all_projects_banner_text_color";
  DROP TYPE "public"."enum_all_projects_content_color";`)
}
