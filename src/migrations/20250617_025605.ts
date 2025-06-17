import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_row_2_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_project_pages_blocks_row_2_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_project_pages_blocks_row_2_alignment" AS ENUM('start', 'center', 'end');
  CREATE TYPE "public"."enum_blogs_blocks_row_2_spacing" AS ENUM('small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_row_2_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_row_2_alignment" AS ENUM('start', 'center', 'end');
  CREATE TABLE "project_pages_blocks_row_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_project_pages_blocks_row_2_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_project_pages_blocks_row_2_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"alignment" "enum_project_pages_blocks_row_2_alignment" DEFAULT 'start' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_row_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacing" "enum_blogs_blocks_row_2_spacing" DEFAULT 'regular' NOT NULL,
  	"bottom_margin" "enum_blogs_blocks_row_2_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"alignment" "enum_blogs_blocks_row_2_alignment" DEFAULT 'start' NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "project_pages_blocks_row_2" ADD CONSTRAINT "project_pages_blocks_row_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_row_2" ADD CONSTRAINT "blogs_blocks_row_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "project_pages_blocks_row_2_order_idx" ON "project_pages_blocks_row_2" USING btree ("_order");
  CREATE INDEX "project_pages_blocks_row_2_parent_id_idx" ON "project_pages_blocks_row_2" USING btree ("_parent_id");
  CREATE INDEX "project_pages_blocks_row_2_path_idx" ON "project_pages_blocks_row_2" USING btree ("_path");
  CREATE INDEX "blogs_blocks_row_2_order_idx" ON "blogs_blocks_row_2" USING btree ("_order");
  CREATE INDEX "blogs_blocks_row_2_parent_id_idx" ON "blogs_blocks_row_2" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_row_2_path_idx" ON "blogs_blocks_row_2" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "project_pages_blocks_row_2" CASCADE;
  DROP TABLE "blogs_blocks_row_2" CASCADE;
  DROP TYPE "public"."enum_project_pages_blocks_row_2_spacing";
  DROP TYPE "public"."enum_project_pages_blocks_row_2_bottom_margin";
  DROP TYPE "public"."enum_project_pages_blocks_row_2_alignment";
  DROP TYPE "public"."enum_blogs_blocks_row_2_spacing";
  DROP TYPE "public"."enum_blogs_blocks_row_2_bottom_margin";
  DROP TYPE "public"."enum_blogs_blocks_row_2_alignment";`)
}
