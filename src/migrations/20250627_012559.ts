import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_project_pages_blocks_testimonial_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TYPE "public"."enum_blogs_blocks_testimonial_bottom_margin" AS ENUM('none', 'small', 'medium', 'regular', 'large', 'xl', 'xxl');
  CREATE TABLE "project_pages_blocks_testimonial" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"author" jsonb NOT NULL,
  	"avatar_id" integer,
  	"color" varchar NOT NULL,
  	"bottom_margin" "enum_project_pages_blocks_testimonial_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_testimonial" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"author" jsonb NOT NULL,
  	"avatar_id" integer,
  	"color" varchar NOT NULL,
  	"bottom_margin" "enum_blogs_blocks_testimonial_bottom_margin" DEFAULT 'xxl' NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "project_pages_blocks_testimonial" ADD CONSTRAINT "project_pages_blocks_testimonial_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "project_pages_blocks_testimonial" ADD CONSTRAINT "project_pages_blocks_testimonial_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_testimonial" ADD CONSTRAINT "blogs_blocks_testimonial_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_testimonial" ADD CONSTRAINT "blogs_blocks_testimonial_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "project_pages_blocks_testimonial_order_idx" ON "project_pages_blocks_testimonial" USING btree ("_order");
  CREATE INDEX "project_pages_blocks_testimonial_parent_id_idx" ON "project_pages_blocks_testimonial" USING btree ("_parent_id");
  CREATE INDEX "project_pages_blocks_testimonial_path_idx" ON "project_pages_blocks_testimonial" USING btree ("_path");
  CREATE INDEX "project_pages_blocks_testimonial_avatar_idx" ON "project_pages_blocks_testimonial" USING btree ("avatar_id");
  CREATE INDEX "blogs_blocks_testimonial_order_idx" ON "blogs_blocks_testimonial" USING btree ("_order");
  CREATE INDEX "blogs_blocks_testimonial_parent_id_idx" ON "blogs_blocks_testimonial" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_testimonial_path_idx" ON "blogs_blocks_testimonial" USING btree ("_path");
  CREATE INDEX "blogs_blocks_testimonial_avatar_idx" ON "blogs_blocks_testimonial" USING btree ("avatar_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "project_pages_blocks_testimonial" CASCADE;
  DROP TABLE "blogs_blocks_testimonial" CASCADE;
  DROP TYPE "public"."enum_project_pages_blocks_testimonial_bottom_margin";
  DROP TYPE "public"."enum_blogs_blocks_testimonial_bottom_margin";`)
}
