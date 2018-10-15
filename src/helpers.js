export const getPostsMeta = () => {
  const postFiles = require.context('./posts', true, /\.mdx$/);
  return postFiles.keys().reduce((all, post) => {
    const postMeta = postFiles(post).meta;
    if (!postMeta.slug) {
      const cleanDefaultSlug = `${post}`.match(/\.\/(.*)\./)[1];
      postMeta.slug = cleanDefaultSlug;
    }

    return all.concat(postMeta);
  }, []);
};
