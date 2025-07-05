import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_project_pages_blocks_image_with_text_overlay_text_color" RENAME TO "enum_iwto_text_color";
  ALTER TYPE "public"."enum_project_pages_blocks_image_with_text_overlay_bottom_margin" RENAME TO "enum_iwto_bottom_margin";
  ALTER TABLE "blogs_blocks_image_with_text_overlay" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "blogs_blocks_image_with_text_overlay" CASCADE;
  ALTER TABLE "project_pages_blocks_image_with_text_overlay" RENAME TO "iwto";
  ALTER TABLE "iwto" DROP CONSTRAINT "project_pages_blocks_image_with_text_overlay_image_id_media_id_fk";
  
  ALTER TABLE "iwto" DROP CONSTRAINT "project_pages_blocks_image_with_text_overlay_parent_id_fk";
  
  DROP INDEX "project_pages_blocks_image_with_text_overlay_order_idx";
  DROP INDEX "project_pages_blocks_image_with_text_overlay_parent_id_idx";
  DROP INDEX "project_pages_blocks_image_with_text_overlay_path_idx";
  DROP INDEX "project_pages_blocks_image_with_text_overlay_image_idx";
  ALTER TABLE "iwto" ADD CONSTRAINT "iwto_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "iwto" ADD CONSTRAINT "iwto_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "iwto_order_idx" ON "iwto" USING btree ("_order");
  CREATE INDEX "iwto_parent_id_idx" ON "iwto" USING btree ("_parent_id");
  CREATE INDEX "iwto_path_idx" ON "iwto" USING btree ("_path");
  CREATE INDEX "iwto_image_idx" ON "iwto" USING btree ("image_id");
  DROP TYPE "public"."enum_blogs_blocks_image_with_text_overlay_text_color";
  DROP TYPE "public"."enum_blogs_blocks_image_with_text_overlay_bottom_margin";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blogs_blocks_image_with_text_overlay_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_image_with_text_overlay_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  ALTER TYPE "public"."enum_iwto_text_color" RENAME TO "enum_project_pages_blocks_image_with_text_overlay_text_color";
  ALTER TYPE "public"."enum_iwto_bottom_margin" RENAME TO "enum_project_pages_blocks_image_with_text_overlay_bottom_margin";
  CREATE TABLE "blogs_blocks_image_with_text_overlay" (
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
  
  ALTER TABLE "iwto" RENAME TO "project_pages_blocks_image_with_text_overlay";
  ALTER TABLE "project_pages_blocks_image_with_text_overlay" DROP CONSTRAINT "iwto_image_id_media_id_fk";
  
  ALTER TABLE "project_pages_blocks_image_with_text_overlay" DROP CONSTRAINT "iwto_parent_id_fk";
  
  DROP INDEX "iwto_order_idx";
  DROP INDEX "iwto_parent_id_idx";
  DROP INDEX "iwto_path_idx";
  DROP INDEX "iwto_image_idx";
  ALTER TABLE "blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "blogs_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_image_with_text_overlay" ADD CONSTRAINT "blogs_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "blogs_blocks_image_with_text_overlay_order_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX "blogs_blocks_image_with_text_overlay_parent_id_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_image_with_text_overlay_path_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX "blogs_blocks_image_with_text_overlay_image_idx" ON "blogs_blocks_image_with_text_overlay" USING btree ("image_id");
  ALTER TABLE "project_pages_blocks_image_with_text_overlay" ADD CONSTRAINT "project_pages_blocks_image_with_text_overlay_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "project_pages_blocks_image_with_text_overlay" ADD CONSTRAINT "project_pages_blocks_image_with_text_overlay_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "project_pages_blocks_image_with_text_overlay_order_idx" ON "project_pages_blocks_image_with_text_overlay" USING btree ("_order");
  CREATE INDEX "project_pages_blocks_image_with_text_overlay_parent_id_idx" ON "project_pages_blocks_image_with_text_overlay" USING btree ("_parent_id");
  CREATE INDEX "project_pages_blocks_image_with_text_overlay_path_idx" ON "project_pages_blocks_image_with_text_overlay" USING btree ("_path");
  CREATE INDEX "project_pages_blocks_image_with_text_overlay_image_idx" ON "project_pages_blocks_image_with_text_overlay" USING btree ("image_id");`)
}
