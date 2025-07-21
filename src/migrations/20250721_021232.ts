import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN "uiux_order";
  ALTER TABLE "projects" DROP COLUMN "industrial_design_order";
  ALTER TABLE "projects" DROP COLUMN "ed_tech_order";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "uiux_order" numeric DEFAULT 0 NOT NULL;
  ALTER TABLE "projects" ADD COLUMN "industrial_design_order" numeric DEFAULT 0 NOT NULL;
  ALTER TABLE "projects" ADD COLUMN "ed_tech_order" numeric DEFAULT 0 NOT NULL;`)
}
