import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_ii_interactive_blocks_text_position" AS ENUM('left', 'right', 'top', 'bottom');
  CREATE TYPE "public"."enum_ii_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TABLE "ii_interactive_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left" numeric NOT NULL,
  	"top" numeric NOT NULL,
  	"text_position" "enum_ii_interactive_blocks_text_position" NOT NULL,
  	"max_text_width" numeric NOT NULL,
  	"text" jsonb NOT NULL
  );
  
  CREATE TABLE "ii" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_size" numeric DEFAULT 100 NOT NULL,
  	"bottom_margin" "enum_ii_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "ii_interactive_blocks" ADD CONSTRAINT "ii_interactive_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ii"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ii" ADD CONSTRAINT "ii_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ii" ADD CONSTRAINT "ii_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "ii_interactive_blocks_order_idx" ON "ii_interactive_blocks" USING btree ("_order");
  CREATE INDEX "ii_interactive_blocks_parent_id_idx" ON "ii_interactive_blocks" USING btree ("_parent_id");
  CREATE INDEX "ii_order_idx" ON "ii" USING btree ("_order");
  CREATE INDEX "ii_parent_id_idx" ON "ii" USING btree ("_parent_id");
  CREATE INDEX "ii_path_idx" ON "ii" USING btree ("_path");
  CREATE INDEX "ii_image_idx" ON "ii" USING btree ("image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "ii_interactive_blocks" CASCADE;
  DROP TABLE "ii" CASCADE;
  DROP TYPE "public"."enum_ii_interactive_blocks_text_position";
  DROP TYPE "public"."enum_ii_bottom_margin";`)
}
