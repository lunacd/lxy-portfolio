import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "global_craftsperson_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "global_dog_lover_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "global_photographer_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "global_thinker_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "global_traveller_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "global_tools" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "global_craftsperson_images" ADD CONSTRAINT "global_craftsperson_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_craftsperson_images" ADD CONSTRAINT "global_craftsperson_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_dog_lover_images" ADD CONSTRAINT "global_dog_lover_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_dog_lover_images" ADD CONSTRAINT "global_dog_lover_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_photographer_images" ADD CONSTRAINT "global_photographer_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_photographer_images" ADD CONSTRAINT "global_photographer_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_thinker_images" ADD CONSTRAINT "global_thinker_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_thinker_images" ADD CONSTRAINT "global_thinker_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_traveller_images" ADD CONSTRAINT "global_traveller_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_traveller_images" ADD CONSTRAINT "global_traveller_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_tools" ADD CONSTRAINT "global_tools_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "global_tools" ADD CONSTRAINT "global_tools_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "global_craftsperson_images_order_idx" ON "global_craftsperson_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "global_craftsperson_images_parent_id_idx" ON "global_craftsperson_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "global_craftsperson_images_image_idx" ON "global_craftsperson_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "global_dog_lover_images_order_idx" ON "global_dog_lover_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "global_dog_lover_images_parent_id_idx" ON "global_dog_lover_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "global_dog_lover_images_image_idx" ON "global_dog_lover_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "global_photographer_images_order_idx" ON "global_photographer_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "global_photographer_images_parent_id_idx" ON "global_photographer_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "global_photographer_images_image_idx" ON "global_photographer_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "global_thinker_images_order_idx" ON "global_thinker_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "global_thinker_images_parent_id_idx" ON "global_thinker_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "global_thinker_images_image_idx" ON "global_thinker_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "global_traveller_images_order_idx" ON "global_traveller_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "global_traveller_images_parent_id_idx" ON "global_traveller_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "global_traveller_images_image_idx" ON "global_traveller_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "global_tools_order_idx" ON "global_tools" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "global_tools_parent_id_idx" ON "global_tools" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "global_tools_image_idx" ON "global_tools" USING btree ("image_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "global_craftsperson_images" CASCADE;
  DROP TABLE "global_dog_lover_images" CASCADE;
  DROP TABLE "global_photographer_images" CASCADE;
  DROP TABLE "global_thinker_images" CASCADE;
  DROP TABLE "global_traveller_images" CASCADE;
  DROP TABLE "global_tools" CASCADE;`)
}
