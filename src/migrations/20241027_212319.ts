import {MigrateUpArgs, MigrateDownArgs, sql} from '@payloadcms/db-postgres'

export async function up({payload}: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "subset_order" numeric DEFAULT 0 NOT NULL;`)
}

export async function down({payload}: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "projects" DROP COLUMN IF EXISTS "subset_order";`)
}
