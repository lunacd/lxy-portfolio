// storage-adapter-import-placeholder
import { Documents } from "./collections/Documents";
import { Global } from "./collections/Global";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { CollectionConfig, ImageSize, buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const cdnDomain = process.env.S3_CDN_DOMAIN;

function generateFileURL({
  prefix,
  filename,
}: {
  collection: CollectionConfig;
  filename: string;
  prefix?: string;
  size?: ImageSize;
}) {
  return `${cdnDomain}/${prefix}/${filename}`;
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Documents],
  globals: [Global],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
    s3Storage({
      collections: {
        media: {
          prefix: "media",
          generateFileURL: generateFileURL,
        },
        document: {
          prefix: "document",
          generateFileURL: generateFileURL,
        },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        endpoint: process.env.S3_ENDPOINT,
        region: process.env.S3_REGION,
      },
    }),
  ],
});
