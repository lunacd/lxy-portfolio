import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_slide_show" ADD COLUMN "image_size" numeric DEFAULT 100 NOT NULL;
  ALTER TABLE "blogs_blocks_slide_show" ADD COLUMN "image_size" numeric DEFAULT 100 NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_slide_show" DROP COLUMN IF EXISTS "image_size";
  ALTER TABLE "blogs_blocks_slide_show" DROP COLUMN IF EXISTS "image_size";`)
}
