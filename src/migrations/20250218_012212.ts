import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items" DROP CONSTRAINT "project_pages_blocks_horizontal_gallery_items_image_id_media_id_fk";
  
  ALTER TABLE "blogs_blocks_horizontal_gallery_items" DROP CONSTRAINT "blogs_blocks_horizontal_gallery_items_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "project_pages_blocks_horizontal_gallery_items_image_idx";
  DROP INDEX IF EXISTS "blogs_blocks_horizontal_gallery_items_image_idx";
  ALTER TABLE "project_pages_blocks_horizontal_gallery_items" DROP COLUMN IF EXISTS "image_id";
  ALTER TABLE "blogs_blocks_horizontal_gallery_items" DROP COLUMN IF EXISTS "image_id";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "blogs_blocks_horizontal_gallery_items" ADD COLUMN "image_id" integer NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "project_pages_blocks_horizontal_gallery_items" ADD CONSTRAINT "project_pages_blocks_horizontal_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_blocks_horizontal_gallery_items" ADD CONSTRAINT "blogs_blocks_horizontal_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "project_pages_blocks_horizontal_gallery_items_image_idx" ON "project_pages_blocks_horizontal_gallery_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "blogs_blocks_horizontal_gallery_items_image_idx" ON "blogs_blocks_horizontal_gallery_items" USING btree ("image_id");`)
}
