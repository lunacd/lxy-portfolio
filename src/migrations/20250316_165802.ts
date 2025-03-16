import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_text_image_title_type" AS ENUM('title', 'subtitle');
  CREATE TYPE "public"."enum_blogs_blocks_text_image_title_type" AS ENUM('title', 'subtitle');
  ALTER TYPE "public"."enum_project_pages_blocks_title_type" RENAME TO "enum_project_pages_blocks_title_title_type";
  ALTER TYPE "public"."enum_blogs_blocks_title_type" RENAME TO "enum_blogs_blocks_title_title_type";
  ALTER TABLE "project_pages_blocks_title" RENAME COLUMN "type" TO "title_type";
  ALTER TABLE "blogs_blocks_title" RENAME COLUMN "type" TO "title_type";
  ALTER TABLE "project_pages_blocks_text_image" ADD COLUMN "title_type" "enum_project_pages_blocks_text_image_title_type" DEFAULT 'title' NOT NULL;
  ALTER TABLE "blogs_blocks_text_image" ADD COLUMN "title_type" "enum_blogs_blocks_text_image_title_type" DEFAULT 'title' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_project_pages_blocks_title_title_type" RENAME TO "enum_project_pages_blocks_title_type";
  ALTER TYPE "public"."enum_blogs_blocks_title_title_type" RENAME TO "enum_blogs_blocks_title_type";
  ALTER TABLE "project_pages_blocks_title" RENAME COLUMN "title_type" TO "type";
  ALTER TABLE "blogs_blocks_title" RENAME COLUMN "title_type" TO "type";
  ALTER TABLE "project_pages_blocks_text_image" DROP COLUMN IF EXISTS "title_type";
  ALTER TABLE "blogs_blocks_text_image" DROP COLUMN IF EXISTS "title_type";
  DROP TYPE "public"."enum_project_pages_blocks_text_image_title_type";
  DROP TYPE "public"."enum_blogs_blocks_text_image_title_type";`)
}
