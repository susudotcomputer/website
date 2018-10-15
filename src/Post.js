import React from 'react';
import Text from './components/Text';

const Post = ({ postSlug }) => {
  const { default: PostContent, meta } = require(`./posts/${postSlug}.mdx`);
  return (
    <div>
      <header className="border-bottom border-pink_25 border-thick mb5 pb3">
        <h2 className="pink inline-block font-mono font-bold fz22px">
          {meta.title}
        </h2>
      </header>
      <PostContent components={Text} />
    </div>
  );
};

export default Post;
