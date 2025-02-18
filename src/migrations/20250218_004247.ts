import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "blogs_blocks_horizontal_gallery_items_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "project_pages_blocks_horizontal_gallery_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "project_pages_blocks_horizontal_gallery_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_horizontal_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_items_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_horizontal_gallery_items_images" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_items_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_horizontal_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items_images_order_idx" ON "project_pages_blocks_horizontal_gallery_items_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items_images_parent_id_idx" ON "project_pages_blocks_horizontal_gallery_items_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items_images_image_idx" ON "project_pages_blocks_horizontal_gallery_items_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_items_images_order_idx" ON "blogs_blocks_horizontal_gallery_items_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_items_images_parent_id_idx" ON "blogs_blocks_horizontal_gallery_items_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_items_images_image_idx" ON "blogs_blocks_horizontal_gallery_items_images" USING btree ("image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "project_pages_blocks_horizontal_gallery_items_images" CASCADE;
  DROP TABLE "blogs_blocks_horizontal_gallery_items_images" CASCADE;`)
}
