import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_content_color" AS ENUM('light', 'dark');
  ALTER TABLE "projects" ADD COLUMN "content_color" "enum_projects_content_color" DEFAULT 'dark' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN IF EXISTS "content_color";
  DROP TYPE "public"."enum_projects_content_color";`)
}
