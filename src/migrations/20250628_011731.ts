import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_banner_text_color" AS ENUM('light', 'dark');
  ALTER TABLE "projects" ADD COLUMN "banner_text_color" "enum_projects_banner_text_color" DEFAULT 'dark' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN "banner_text_color";
  DROP TYPE "public"."enum_projects_banner_text_color";`)
}
