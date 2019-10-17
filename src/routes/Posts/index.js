import React from 'react';
import Well from 'components/Well';
import PostList from 'components/PostList';
import { Helmet } from 'react-helmet';
import useData from '../../hooks/useData';

function Post() {
  const [status, error, isLoading, data] = useData(
    'posts',
    {
      reduce: true,
      skipRedirect: true
    },
    true
  );

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

export default Post;
