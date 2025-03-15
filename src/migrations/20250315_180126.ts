import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "uiux_order" numeric DEFAULT 0 NOT NULL;
  ALTER TABLE "projects" ADD COLUMN "industrial_design_order" numeric DEFAULT 0 NOT NULL;
  ALTER TABLE "projects" ADD COLUMN "ed_tech_order" numeric DEFAULT 0 NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN IF EXISTS "uiux_order";
  ALTER TABLE "projects" DROP COLUMN IF EXISTS "industrial_design_order";
  ALTER TABLE "projects" DROP COLUMN IF EXISTS "ed_tech_order";`)
}
