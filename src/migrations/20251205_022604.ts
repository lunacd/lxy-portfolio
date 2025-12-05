import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_button_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_uiux_blogs_blocks_button_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_edtech_blogs_blocks_button_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_product_blogs_blocks_button_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_all_blogs_blocks_button_color" AS ENUM('dark', 'light');
  ALTER TABLE "project_pages_blocks_button" ADD COLUMN "color" "enum_project_pages_blocks_button_color" DEFAULT 'dark' NOT NULL;
  ALTER TABLE "uiux_blogs_blocks_button" ADD COLUMN "color" "enum_uiux_blogs_blocks_button_color" DEFAULT 'dark' NOT NULL;
  ALTER TABLE "edtech_blogs_blocks_button" ADD COLUMN "color" "enum_edtech_blogs_blocks_button_color" DEFAULT 'dark' NOT NULL;
  ALTER TABLE "product_blogs_blocks_button" ADD COLUMN "color" "enum_product_blogs_blocks_button_color" DEFAULT 'dark' NOT NULL;
  ALTER TABLE "all_blogs_blocks_button" ADD COLUMN "color" "enum_all_blogs_blocks_button_color" DEFAULT 'dark' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_button" DROP COLUMN "color";
  ALTER TABLE "uiux_blogs_blocks_button" DROP COLUMN "color";
  ALTER TABLE "edtech_blogs_blocks_button" DROP COLUMN "color";
  ALTER TABLE "product_blogs_blocks_button" DROP COLUMN "color";
  ALTER TABLE "all_blogs_blocks_button" DROP COLUMN "color";
  DROP TYPE "public"."enum_project_pages_blocks_button_color";
  DROP TYPE "public"."enum_uiux_blogs_blocks_button_color";
  DROP TYPE "public"."enum_edtech_blogs_blocks_button_color";
  DROP TYPE "public"."enum_product_blogs_blocks_button_color";
  DROP TYPE "public"."enum_all_blogs_blocks_button_color";`)
}
