import React from 'react';
import Post from 'components/Post';

function PostList({ data }) {
  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <div className="posts">
      {data.map((post, key) => {
        return <Post key={key} post={post} />;
      })}
    </div>
  );
}

export default PostList;
