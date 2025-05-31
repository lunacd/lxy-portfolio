import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_projects_image_overlay_type" AS ENUM('dark', 'light', 'none');
  ALTER TABLE "projects" ADD COLUMN "image_overlay_type" "enum_projects_image_overlay_type" DEFAULT 'none' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP COLUMN IF EXISTS "image_overlay_type";
  DROP TYPE "public"."enum_projects_image_overlay_type";`)
}
