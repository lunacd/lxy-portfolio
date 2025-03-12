import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "projects_related_works" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"related_work_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "projects_related_works" ADD CONSTRAINT "projects_related_works_related_work_id_projects_id_fk" FOREIGN KEY ("related_work_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects_related_works" ADD CONSTRAINT "projects_related_works_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "projects_related_works_order_idx" ON "projects_related_works" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_related_works_parent_id_idx" ON "projects_related_works" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_related_works_related_work_idx" ON "projects_related_works" USING btree ("related_work_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "projects_related_works" CASCADE;`)
}
