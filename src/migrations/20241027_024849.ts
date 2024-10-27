import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "project_pages_blocks_slide_show_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_slide_show" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_slide_show_images" ADD CONSTRAINT "project_pages_blocks_slide_show_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_slide_show_images" ADD CONSTRAINT "project_pages_blocks_slide_show_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_slide_show"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_slide_show" ADD CONSTRAINT "project_pages_blocks_slide_show_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_slide_show_images_order_idx" ON "project_pages_blocks_slide_show_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_slide_show_images_parent_id_idx" ON "project_pages_blocks_slide_show_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_slide_show_images_image_idx" ON "project_pages_blocks_slide_show_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_slide_show_order_idx" ON "project_pages_blocks_slide_show" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_slide_show_parent_id_idx" ON "project_pages_blocks_slide_show" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_slide_show_path_idx" ON "project_pages_blocks_slide_show" USING btree ("_path");`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   DROP TABLE "project_pages_blocks_slide_show_images";
  DROP TABLE "project_pages_blocks_slide_show";`)
}
