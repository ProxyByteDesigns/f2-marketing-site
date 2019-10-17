import React from 'react';
import PostList from 'components/PostList';
import useData from '../../hooks/useData';

const LatestPosts = () => {
  const [status, error, isLoading, data] = useData(
    'posts',
    {
      sort: 'created:DESC',
      limit: 5,
      skipRedirect: true
    },
    true
  );

  return <PostList data={data} />;
};

export default LatestPosts;
