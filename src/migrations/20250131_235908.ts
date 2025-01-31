import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_large_gallery_rows_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_project_pages_blocks_row_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_blogs_blocks_large_gallery_rows_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_blogs_blocks_row_alignment" AS ENUM('start', 'center', 'end');
  ALTER TABLE "project_pages_blocks_large_gallery_rows" ADD COLUMN "alignment" "enum_project_pages_blocks_large_gallery_rows_alignment" DEFAULT 'start' NOT NULL;
  ALTER TABLE "project_pages_blocks_row" ADD COLUMN "alignment" "enum_project_pages_blocks_row_alignment" DEFAULT 'start' NOT NULL;
  ALTER TABLE "blogs_blocks_large_gallery_rows" ADD COLUMN "alignment" "enum_blogs_blocks_large_gallery_rows_alignment" DEFAULT 'start' NOT NULL;
  ALTER TABLE "blogs_blocks_row" ADD COLUMN "alignment" "enum_blogs_blocks_row_alignment" DEFAULT 'start' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_large_gallery_rows" DROP COLUMN IF EXISTS "alignment";
  ALTER TABLE "project_pages_blocks_row" DROP COLUMN IF EXISTS "alignment";
  ALTER TABLE "blogs_blocks_large_gallery_rows" DROP COLUMN IF EXISTS "alignment";
  ALTER TABLE "blogs_blocks_row" DROP COLUMN IF EXISTS "alignment";
  DROP TYPE "public"."enum_project_pages_blocks_large_gallery_rows_alignment";
  DROP TYPE "public"."enum_project_pages_blocks_row_alignment";
  DROP TYPE "public"."enum_blogs_blocks_large_gallery_rows_alignment";
  DROP TYPE "public"."enum_blogs_blocks_row_alignment";`)
}
