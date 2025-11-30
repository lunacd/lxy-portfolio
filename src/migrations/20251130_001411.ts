import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_image" ADD COLUMN "can_zoom" boolean DEFAULT false;
  ALTER TABLE "uiux_blogs_blocks_image" ADD COLUMN "can_zoom" boolean DEFAULT false;
  ALTER TABLE "edtech_blogs_blocks_image" ADD COLUMN "can_zoom" boolean DEFAULT false;
  ALTER TABLE "product_blogs_blocks_image" ADD COLUMN "can_zoom" boolean DEFAULT false;
  ALTER TABLE "all_blogs_blocks_image" ADD COLUMN "can_zoom" boolean DEFAULT false;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_image" DROP COLUMN "can_zoom";
  ALTER TABLE "uiux_blogs_blocks_image" DROP COLUMN "can_zoom";
  ALTER TABLE "edtech_blogs_blocks_image" DROP COLUMN "can_zoom";
  ALTER TABLE "product_blogs_blocks_image" DROP COLUMN "can_zoom";
  ALTER TABLE "all_blogs_blocks_image" DROP COLUMN "can_zoom";`)
}
