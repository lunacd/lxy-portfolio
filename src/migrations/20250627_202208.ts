import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_note_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_project_pages_blocks_note_text_color" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_blogs_blocks_note_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_note_text_color" AS ENUM('dark', 'light');
  CREATE TABLE "project_pages_blocks_note" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"note_emoji" varchar NOT NULL,
  	"text" jsonb NOT NULL,
  	"background_color" varchar NOT NULL,
  	"bottom_margin" "enum_project_pages_blocks_note_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"text_color" "enum_project_pages_blocks_note_text_color" DEFAULT 'dark' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_note" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"note_emoji" varchar NOT NULL,
  	"text" jsonb NOT NULL,
  	"background_color" varchar NOT NULL,
  	"bottom_margin" "enum_blogs_blocks_note_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"text_color" "enum_blogs_blocks_note_text_color" DEFAULT 'dark' NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "project_pages_blocks_note" ADD CONSTRAINT "project_pages_blocks_note_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_note" ADD CONSTRAINT "blogs_blocks_note_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "project_pages_blocks_note_order_idx" ON "project_pages_blocks_note" USING btree ("_order");
  CREATE INDEX "project_pages_blocks_note_parent_id_idx" ON "project_pages_blocks_note" USING btree ("_parent_id");
  CREATE INDEX "project_pages_blocks_note_path_idx" ON "project_pages_blocks_note" USING btree ("_path");
  CREATE INDEX "blogs_blocks_note_order_idx" ON "blogs_blocks_note" USING btree ("_order");
  CREATE INDEX "blogs_blocks_note_parent_id_idx" ON "blogs_blocks_note" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_note_path_idx" ON "blogs_blocks_note" USING btree ("_path");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "project_pages_blocks_note" CASCADE;
  DROP TABLE "blogs_blocks_note" CASCADE;
  DROP TYPE "public"."enum_project_pages_blocks_note_bottom_margin";
  DROP TYPE "public"."enum_project_pages_blocks_note_text_color";
  DROP TYPE "public"."enum_blogs_blocks_note_bottom_margin";
  DROP TYPE "public"."enum_blogs_blocks_note_text_color";`)
}
