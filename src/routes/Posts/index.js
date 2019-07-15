import React from 'react';
import withData from 'components/withData';
import Well from 'components/Well';
import PostList from 'components/PostList';
import { Helmet } from 'react-helmet';

function Post({ data }) {
  return (
    <div className="page">
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <Well title="Posts" />
      <PostList data={data} />
    </div>
  );
}

export default withData(Post, { content_type: 'posts', static: true });
