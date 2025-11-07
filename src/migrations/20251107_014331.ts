import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "uiux_blogs" ADD COLUMN "enabled" boolean DEFAULT true NOT NULL;
  ALTER TABLE "edtech_blogs" ADD COLUMN "enabled" boolean DEFAULT true NOT NULL;
  ALTER TABLE "product_blogs" ADD COLUMN "enabled" boolean DEFAULT true NOT NULL;
  ALTER TABLE "all_blogs" ADD COLUMN "enabled" boolean DEFAULT true NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "uiux_blogs" DROP COLUMN "enabled";
  ALTER TABLE "edtech_blogs" DROP COLUMN "enabled";
  ALTER TABLE "product_blogs" DROP COLUMN "enabled";
  ALTER TABLE "all_blogs" DROP COLUMN "enabled";`)
}
