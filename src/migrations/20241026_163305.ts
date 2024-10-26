import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TYPE "public"."enum_projects_text_color" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_project_pages_blocks_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_project_pages_blocks_title_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_project_pages_blocks_text_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_project_pages_blocks_horizontal_gallery_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_project_pages_blocks_horizontal_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_project_pages_blocks_text_image_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_project_pages_blocks_horizontal_scroll_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_project_pages_blocks_column_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_project_pages_blocks_column_justify" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_project_pages_blocks_row_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"prefix" varchar DEFAULT 'media',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "document" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"prefix" varchar DEFAULT 'document',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "projects_focuses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"focus" varchar NOT NULL,
  	"focus_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"uri" varchar NOT NULL,
  	"order" numeric DEFAULT 0 NOT NULL,
  	"is_main_project" boolean DEFAULT true NOT NULL,
  	"duration" varchar,
  	"category" varchar NOT NULL,
  	"project_size" varchar,
  	"brief" varchar,
  	"project_image_id" integer,
  	"mobile_project_image_id" integer,
  	"project_gallery_image_id" integer NOT NULL,
  	"background_color" varchar,
  	"page_background_color" varchar,
  	"text_color" "enum_projects_text_color" DEFAULT 'dark' NOT NULL,
  	"image_cover" boolean,
  	"award_image_id" integer,
  	"external_link" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"type" "enum_project_pages_blocks_title_type" DEFAULT 'title' NOT NULL,
  	"text_color" "enum_project_pages_blocks_title_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb NOT NULL,
  	"text_color" "enum_project_pages_blocks_text_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"text" jsonb NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_horizontal_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_project_pages_blocks_horizontal_gallery_spacing" DEFAULT 'regular' NOT NULL,
  	"text_color" "enum_project_pages_blocks_horizontal_gallery_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_youtube" (
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
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_document" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"document_id" integer NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"text_color" "enum_project_pages_blocks_text_image_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_horizontal_scroll" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"scroll_prompt" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"text_color" "enum_project_pages_blocks_horizontal_scroll_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_project_pages_blocks_column_spacing" DEFAULT 'regular' NOT NULL,
  	"justify" "enum_project_pages_blocks_column_justify" DEFAULT 'start' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_project_pages_blocks_row_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"document_id" integer,
  	"projects_id" integer,
  	"project_pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "global" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"connection_prompt" varchar NOT NULL,
  	"resume_id" integer NOT NULL,
  	"profile" varchar DEFAULT '' NOT NULL,
  	"profile_picture_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "projects_focuses" ADD CONSTRAINT "projects_focuses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_project_image_id_media_id_fk" FOREIGN KEY ("project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_mobile_project_image_id_media_id_fk" FOREIGN KEY ("mobile_project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_project_gallery_image_id_media_id_fk" FOREIGN KEY ("project_gallery_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_award_image_id_media_id_fk" FOREIGN KEY ("award_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_title" ADD CONSTRAINT "project_pages_blocks_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_text" ADD CONSTRAINT "project_pages_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items" ADD CONSTRAINT "project_pages_blocks_horizontal_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items" ADD CONSTRAINT "project_pages_blocks_horizontal_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_horizontal_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_horizontal_gallery" ADD CONSTRAINT "project_pages_blocks_horizontal_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_image" ADD CONSTRAINT "project_pages_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_image" ADD CONSTRAINT "project_pages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_youtube" ADD CONSTRAINT "project_pages_blocks_youtube_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_document" ADD CONSTRAINT "project_pages_blocks_document_document_id_document_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_document" ADD CONSTRAINT "project_pages_blocks_document_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_text_image" ADD CONSTRAINT "project_pages_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_text_image" ADD CONSTRAINT "project_pages_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_horizontal_scroll" ADD CONSTRAINT "project_pages_blocks_horizontal_scroll_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_horizontal_scroll" ADD CONSTRAINT "project_pages_blocks_horizontal_scroll_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_column" ADD CONSTRAINT "project_pages_blocks_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_row" ADD CONSTRAINT "project_pages_blocks_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_document_fk" FOREIGN KEY ("document_id") REFERENCES "public"."document"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_project_pages_fk" FOREIGN KEY ("project_pages_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global" ADD CONSTRAINT "global_resume_id_document_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."document"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global" ADD CONSTRAINT "global_profile_picture_id_media_id_fk" FOREIGN KEY ("profile_picture_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "document_updated_at_idx" ON "document" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "document_created_at_idx" ON "document" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "document_filename_idx" ON "document" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "projects_focuses_order_idx" ON "projects_focuses" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_focuses_parent_id_idx" ON "projects_focuses" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_focuses_focus_id_idx" ON "projects_focuses" USING btree ("focus_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "projects_name_idx" ON "projects" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "projects_uri_idx" ON "projects" USING btree ("uri");
  CREATE INDEX IF NOT EXISTS "projects_is_main_project_idx" ON "projects" USING btree ("is_main_project");
  CREATE INDEX IF NOT EXISTS "projects_project_image_idx" ON "projects" USING btree ("project_image_id");
  CREATE INDEX IF NOT EXISTS "projects_mobile_project_image_idx" ON "projects" USING btree ("mobile_project_image_id");
  CREATE INDEX IF NOT EXISTS "projects_project_gallery_image_idx" ON "projects" USING btree ("project_gallery_image_id");
  CREATE INDEX IF NOT EXISTS "projects_award_image_idx" ON "projects" USING btree ("award_image_id");
  CREATE INDEX IF NOT EXISTS "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_title_order_idx" ON "project_pages_blocks_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_title_parent_id_idx" ON "project_pages_blocks_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_title_path_idx" ON "project_pages_blocks_title" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_text_order_idx" ON "project_pages_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_text_parent_id_idx" ON "project_pages_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_text_path_idx" ON "project_pages_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items_order_idx" ON "project_pages_blocks_horizontal_gallery_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items_parent_id_idx" ON "project_pages_blocks_horizontal_gallery_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items_image_idx" ON "project_pages_blocks_horizontal_gallery_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_order_idx" ON "project_pages_blocks_horizontal_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_parent_id_idx" ON "project_pages_blocks_horizontal_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_path_idx" ON "project_pages_blocks_horizontal_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_order_idx" ON "project_pages_blocks_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_parent_id_idx" ON "project_pages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_path_idx" ON "project_pages_blocks_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_image_idx" ON "project_pages_blocks_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_youtube_order_idx" ON "project_pages_blocks_youtube" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_youtube_parent_id_idx" ON "project_pages_blocks_youtube" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_youtube_path_idx" ON "project_pages_blocks_youtube" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_document_order_idx" ON "project_pages_blocks_document" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_document_parent_id_idx" ON "project_pages_blocks_document" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_document_path_idx" ON "project_pages_blocks_document" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_document_document_idx" ON "project_pages_blocks_document" USING btree ("document_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_text_image_order_idx" ON "project_pages_blocks_text_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_text_image_parent_id_idx" ON "project_pages_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_text_image_path_idx" ON "project_pages_blocks_text_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_text_image_image_idx" ON "project_pages_blocks_text_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_scroll_order_idx" ON "project_pages_blocks_horizontal_scroll" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_scroll_parent_id_idx" ON "project_pages_blocks_horizontal_scroll" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_scroll_path_idx" ON "project_pages_blocks_horizontal_scroll" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_scroll_image_idx" ON "project_pages_blocks_horizontal_scroll" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_column_order_idx" ON "project_pages_blocks_column" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_column_parent_id_idx" ON "project_pages_blocks_column" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_column_path_idx" ON "project_pages_blocks_column" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_row_order_idx" ON "project_pages_blocks_row" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_row_parent_id_idx" ON "project_pages_blocks_row" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_row_path_idx" ON "project_pages_blocks_row" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_updated_at_idx" ON "project_pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "project_pages_created_at_idx" ON "project_pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_document_id_idx" ON "payload_locked_documents_rels" USING btree ("document_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_project_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("project_pages_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "global_resume_idx" ON "global" USING btree ("resume_id");
  CREATE INDEX IF NOT EXISTS "global_profile_picture_idx" ON "global" USING btree ("profile_picture_id");`);
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "users";
  DROP TABLE "media";
  DROP TABLE "document";
  DROP TABLE "projects_focuses";
  DROP TABLE "projects";
  DROP TABLE "project_pages_blocks_title";
  DROP TABLE "project_pages_blocks_text";
  DROP TABLE "project_pages_blocks_horizontal_gallery_items";
  DROP TABLE "project_pages_blocks_horizontal_gallery";
  DROP TABLE "project_pages_blocks_image";
  DROP TABLE "project_pages_blocks_youtube";
  DROP TABLE "project_pages_blocks_document";
  DROP TABLE "project_pages_blocks_text_image";
  DROP TABLE "project_pages_blocks_horizontal_scroll";
  DROP TABLE "project_pages_blocks_column";
  DROP TABLE "project_pages_blocks_row";
  DROP TABLE "project_pages";
  DROP TABLE "payload_locked_documents";
  DROP TABLE "payload_locked_documents_rels";
  DROP TABLE "payload_preferences";
  DROP TABLE "payload_preferences_rels";
  DROP TABLE "payload_migrations";
  DROP TABLE "global";
  DROP TYPE "public"."enum_projects_text_color";
  DROP TYPE "public"."enum_project_pages_blocks_title_type";
  DROP TYPE "public"."enum_project_pages_blocks_title_text_color";
  DROP TYPE "public"."enum_project_pages_blocks_text_text_color";
  DROP TYPE "public"."enum_project_pages_blocks_horizontal_gallery_spacing";
  DROP TYPE "public"."enum_project_pages_blocks_horizontal_gallery_text_color";
  DROP TYPE "public"."enum_project_pages_blocks_text_image_text_color";
  DROP TYPE "public"."enum_project_pages_blocks_horizontal_scroll_text_color";
  DROP TYPE "public"."enum_project_pages_blocks_column_spacing";
  DROP TYPE "public"."enum_project_pages_blocks_column_justify";
  DROP TYPE "public"."enum_project_pages_blocks_row_spacing";`);
}
