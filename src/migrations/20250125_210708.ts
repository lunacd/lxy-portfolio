import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_image_with_text_overlay_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_project_pages_blocks_image_with_text_overlay_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_image_with_text_overlay_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_image_with_text_overlay_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_image_with_text_overlay" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"text_overlay" jsonb NOT NULL,
  	"text_color" "enum_project_pages_blocks_image_with_text_overlay_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_project_pages_blocks_image_with_text_overlay_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_image_with_text_overlay" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"text_overlay" jsonb NOT NULL,
  	"text_color" "enum_blogs_blocks_image_with_text_overlay_text_color" DEFAULT 'dark' NOT NULL,
  	"bottom_margin" "enum_blogs_blocks_image_with_text_overlay_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "project_pages_blocks_title" ALTER COLUMN "bottom_margin" SET DEFAULT 'large';
  ALTER TABLE "blogs_blocks_title" ALTER COLUMN "bottom_margin" SET DEFAULT 'large';
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_image_with_text_overlay" ADD CONSTRAINT "project_pages_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_image_with_text_overlay" ADD CONSTRAINT "project_pages_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "blogs_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "blogs_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_with_text_overlay_order_idx" ON "project_pages_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_with_text_overlay_parent_id_idx" ON "project_pages_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_with_text_overlay_path_idx" ON "project_pages_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_image_with_text_overlay_image_idx" ON "project_pages_blocks_image_with_text_overlay" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_with_text_overlay_order_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_with_text_overlay_parent_id_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_with_text_overlay_path_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_image_with_text_overlay_image_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_image_with_text_overlay" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "blogs_blocks_image_with_text_overlay" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "project_pages_blocks_image_with_text_overlay" CASCADE;
  DROP TABLE "blogs_blocks_image_with_text_overlay" CASCADE;
  ALTER TABLE "project_pages_blocks_title" ALTER COLUMN "bottom_margin" SET DEFAULT 'xxl';
  ALTER TABLE "blogs_blocks_title" ALTER COLUMN "bottom_margin" SET DEFAULT 'xxl';
  DROP TYPE "public"."enum_project_pages_blocks_image_with_text_overlay_text_color";
  DROP TYPE "public"."enum_project_pages_blocks_image_with_text_overlay_bottom_margin";
  DROP TYPE "public"."enum_blogs_blocks_image_with_text_overlay_text_color";
  DROP TYPE "public"."enum_blogs_blocks_image_with_text_overlay_bottom_margin";`)
}
