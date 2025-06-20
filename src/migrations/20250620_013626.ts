import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_project_pages_blocks_column_spacing" ADD VALUE 'none' BEFORE 'small';
  ALTER TYPE "public"."enum_project_pages_blocks_row_2_spacing" ADD VALUE 'none' BEFORE 'small';
  ALTER TYPE "public"."enum_project_pages_blocks_row_spacing" ADD VALUE 'none' BEFORE 'small';
  ALTER TYPE "public"."enum_blogs_blocks_column_spacing" ADD VALUE 'none' BEFORE 'small';
  ALTER TYPE "public"."enum_blogs_blocks_row_2_spacing" ADD VALUE 'none' BEFORE 'small';
  ALTER TYPE "public"."enum_blogs_blocks_row_spacing" ADD VALUE 'none' BEFORE 'small';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_column" ALTER COLUMN "spacing" SET DATA TYPE text;
  ALTER TABLE "project_pages_blocks_column" ALTER COLUMN "spacing" SET DEFAULT 'regular'::text;
  DROP TYPE "public"."enum_project_pages_blocks_column_spacing";
  CREATE TYPE "public"."enum_project_pages_blocks_column_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  ALTER TABLE "project_pages_blocks_column" ALTER COLUMN "spacing" SET DEFAULT 'regular'::"public"."enum_project_pages_blocks_column_spacing";
  ALTER TABLE "project_pages_blocks_column" ALTER COLUMN "spacing" SET DATA TYPE "public"."enum_project_pages_blocks_column_spacing" USING "spacing"::"public"."enum_project_pages_blocks_column_spacing";
  ALTER TABLE "project_pages_blocks_row_2" ALTER COLUMN "spacing" SET DATA TYPE text;
  ALTER TABLE "project_pages_blocks_row_2" ALTER COLUMN "spacing" SET DEFAULT 'regular'::text;
  DROP TYPE "public"."enum_project_pages_blocks_row_2_spacing";
  CREATE TYPE "public"."enum_project_pages_blocks_row_2_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  ALTER TABLE "project_pages_blocks_row_2" ALTER COLUMN "spacing" SET DEFAULT 'regular'::"public"."enum_project_pages_blocks_row_2_spacing";
  ALTER TABLE "project_pages_blocks_row_2" ALTER COLUMN "spacing" SET DATA TYPE "public"."enum_project_pages_blocks_row_2_spacing" USING "spacing"::"public"."enum_project_pages_blocks_row_2_spacing";
  ALTER TABLE "project_pages_blocks_row" ALTER COLUMN "spacing" SET DATA TYPE text;
  ALTER TABLE "project_pages_blocks_row" ALTER COLUMN "spacing" SET DEFAULT 'regular'::text;
  DROP TYPE "public"."enum_project_pages_blocks_row_spacing";
  CREATE TYPE "public"."enum_project_pages_blocks_row_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  ALTER TABLE "project_pages_blocks_row" ALTER COLUMN "spacing" SET DEFAULT 'regular'::"public"."enum_project_pages_blocks_row_spacing";
  ALTER TABLE "project_pages_blocks_row" ALTER COLUMN "spacing" SET DATA TYPE "public"."enum_project_pages_blocks_row_spacing" USING "spacing"::"public"."enum_project_pages_blocks_row_spacing";
  ALTER TABLE "blogs_blocks_column" ALTER COLUMN "spacing" SET DATA TYPE text;
  ALTER TABLE "blogs_blocks_column" ALTER COLUMN "spacing" SET DEFAULT 'regular'::text;
  DROP TYPE "public"."enum_blogs_blocks_column_spacing";
  CREATE TYPE "public"."enum_blogs_blocks_column_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  ALTER TABLE "blogs_blocks_column" ALTER COLUMN "spacing" SET DEFAULT 'regular'::"public"."enum_blogs_blocks_column_spacing";
  ALTER TABLE "blogs_blocks_column" ALTER COLUMN "spacing" SET DATA TYPE "public"."enum_blogs_blocks_column_spacing" USING "spacing"::"public"."enum_blogs_blocks_column_spacing";
  ALTER TABLE "blogs_blocks_row_2" ALTER COLUMN "spacing" SET DATA TYPE text;
  ALTER TABLE "blogs_blocks_row_2" ALTER COLUMN "spacing" SET DEFAULT 'regular'::text;
  DROP TYPE "public"."enum_blogs_blocks_row_2_spacing";
  CREATE TYPE "public"."enum_blogs_blocks_row_2_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  ALTER TABLE "blogs_blocks_row_2" ALTER COLUMN "spacing" SET DEFAULT 'regular'::"public"."enum_blogs_blocks_row_2_spacing";
  ALTER TABLE "blogs_blocks_row_2" ALTER COLUMN "spacing" SET DATA TYPE "public"."enum_blogs_blocks_row_2_spacing" USING "spacing"::"public"."enum_blogs_blocks_row_2_spacing";
  ALTER TABLE "blogs_blocks_row" ALTER COLUMN "spacing" SET DATA TYPE text;
  ALTER TABLE "blogs_blocks_row" ALTER COLUMN "spacing" SET DEFAULT 'regular'::text;
  DROP TYPE "public"."enum_blogs_blocks_row_spacing";
  CREATE TYPE "public"."enum_blogs_blocks_row_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  ALTER TABLE "blogs_blocks_row" ALTER COLUMN "spacing" SET DEFAULT 'regular'::"public"."enum_blogs_blocks_row_spacing";
  ALTER TABLE "blogs_blocks_row" ALTER COLUMN "spacing" SET DATA TYPE "public"."enum_blogs_blocks_row_spacing" USING "spacing"::"public"."enum_blogs_blocks_row_spacing";`)
}
