import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   CREATE TABLE IF NOT EXISTS "project_pages_blocks_small_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"text" jsonb NOT NULL,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "project_pages_blocks_small_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bottom_margin" boolean DEFAULT true NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "blogs" ADD COLUMN "cover_image_id" integer NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_small_gallery_items" ADD CONSTRAINT "project_pages_blocks_small_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_small_gallery_items" ADD CONSTRAINT "project_pages_blocks_small_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages_blocks_small_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_small_gallery" ADD CONSTRAINT "project_pages_blocks_small_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_small_gallery_items_order_idx" ON "project_pages_blocks_small_gallery_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_small_gallery_items_parent_id_idx" ON "project_pages_blocks_small_gallery_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_small_gallery_items_image_idx" ON "project_pages_blocks_small_gallery_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_small_gallery_order_idx" ON "project_pages_blocks_small_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_small_gallery_parent_id_idx" ON "project_pages_blocks_small_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_small_gallery_path_idx" ON "project_pages_blocks_small_gallery" USING btree ("_path");
  DO $$ BEGIN
   ALTER TABLE "blogs" ADD CONSTRAINT "blogs_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "blogs_cover_image_idx" ON "blogs" USING btree ("cover_image_id");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`
   ALTER TABLE "project_pages_blocks_small_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "project_pages_blocks_small_gallery" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "project_pages_blocks_small_gallery_items" CASCADE;
  DROP TABLE "project_pages_blocks_small_gallery" CASCADE;
  ALTER TABLE "blogs" DROP CONSTRAINT "blogs_cover_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "blogs_cover_image_idx";
  ALTER TABLE "blogs" DROP COLUMN IF EXISTS "cover_image_id";`)
}
