import { defineDocs, defineConfig, defineCollections } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

// export const components = defineCollections({
//   type: "doc" , 
//   dir: 'content/components',
// }); 

// export const themes = defineCollections({
//   type: "doc" , 
//   dir: 'content/themes',
// });




export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
