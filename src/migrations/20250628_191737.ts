import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_ii_text_color" AS ENUM('dark', 'light');
  ALTER TABLE "ii" ADD COLUMN "background_color" varchar DEFAULT '#000' NOT NULL;
  ALTER TABLE "ii" ADD COLUMN "text_color" "enum_ii_text_color" DEFAULT 'dark' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "ii" DROP COLUMN "background_color";
  ALTER TABLE "ii" DROP COLUMN "text_color";
  DROP TYPE "public"."enum_ii_text_color";`)
}
