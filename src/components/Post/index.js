import React from 'react';
import moment from 'moment';
import Well from 'components/Well';
import './Post.css';

function Post({ post }) {
  return (
    <div className="post">
      <Well>
        <div className="post-title">
          <h1 className="green">{post.title}</h1>
          <h2 className="green">
            {' '}
            by: {post.author.username} at{' '}
            {moment(post.created_at).format('Y-MM-DD')}
          </h2>
        </div>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </Well>
    </div>
  );
}

export default Post;
