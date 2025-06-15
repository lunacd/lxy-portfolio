import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" DROP CONSTRAINT "projects_mobile_project_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "projects_mobile_project_image_idx";
  ALTER TABLE "projects" DROP COLUMN IF EXISTS "mobile_project_image_id";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "projects" ADD COLUMN "mobile_project_image_id" integer;
  DO $$ BEGIN
   ALTER TABLE "projects" ADD CONSTRAINT "projects_mobile_project_image_id_media_id_fk" FOREIGN KEY ("mobile_project_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "projects_mobile_project_image_idx" ON "projects" USING btree ("mobile_project_image_id");`)
}
