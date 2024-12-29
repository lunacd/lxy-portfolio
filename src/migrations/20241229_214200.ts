import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_title" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_text" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_horizontal_gallery" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_image" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_youtube" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_document" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_text_image" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_horizontal_scroll" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_slide_show" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_small_gallery" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_equal_height_images" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_large_gallery" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_column" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "project_pages_blocks_row" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_title" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_text" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_horizontal_gallery" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_image" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_youtube" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_document" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_text_image" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_horizontal_scroll" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_slide_show" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_small_gallery" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_equal_height_images" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_large_gallery" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_column" DROP COLUMN IF EXISTS "bottom_margin";
  ALTER TABLE "blogs_blocks_row" DROP COLUMN IF EXISTS "bottom_margin";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_title" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_text" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_horizontal_gallery" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_image" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_youtube" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_document" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_text_image" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_horizontal_scroll" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_slide_show" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_small_gallery" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_equal_height_images" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_large_gallery" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_column" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "project_pages_blocks_row" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_title" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_text" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_horizontal_gallery" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_image" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_youtube" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_document" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_text_image" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_horizontal_scroll" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_slide_show" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_small_gallery" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_equal_height_images" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_large_gallery" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_column" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;
  ALTER TABLE "blogs_blocks_row" ADD COLUMN "bottom_margin" boolean DEFAULT true NOT NULL;`)
}
