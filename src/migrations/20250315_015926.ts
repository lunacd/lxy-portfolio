import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_small_gallery_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_small_gallery_text_color" AS ENUM('dark', 'light');
  ALTER TABLE "project_pages_blocks_small_gallery" ADD COLUMN "text_color" "enum_project_pages_blocks_small_gallery_text_color" DEFAULT 'dark' NOT NULL;
  ALTER TABLE "blogs_blocks_small_gallery" ADD COLUMN "text_color" "enum_blogs_blocks_small_gallery_text_color" DEFAULT 'dark' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_small_gallery" DROP COLUMN IF EXISTS "text_color";
  ALTER TABLE "blogs_blocks_small_gallery" DROP COLUMN IF EXISTS "text_color";
  DROP TYPE "public"."enum_project_pages_blocks_small_gallery_text_color";
  DROP TYPE "public"."enum_blogs_blocks_small_gallery_text_color";`)
}
