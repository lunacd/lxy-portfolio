import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items" ALTER COLUMN "text" DROP NOT NULL;
  ALTER TABLE "blogs_blocks_horizontal_gallery_items" ALTER COLUMN "text" DROP NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items" ALTER COLUMN "text" SET NOT NULL;
  ALTER TABLE "blogs_blocks_horizontal_gallery_items" ALTER COLUMN "text" SET NOT NULL;`)
}
