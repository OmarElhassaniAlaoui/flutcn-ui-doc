import {
  defineDocs,
  defineConfig,
  defineCollections,
  frontmatterSchema ,
  metaSchema , 
} from "fumadocs-mdx/config";
import { z } from "zod";

export const {docs , meta} = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      index: z.boolean().default(false),
    })
  }, 
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    })
  }
});

export const widgets = defineCollections({
  type: "doc",
  dir: "content/widgets",
});


export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
