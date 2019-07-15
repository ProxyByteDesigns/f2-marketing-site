import React from 'react';
import LatestPosts from './LatestPosts';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <React.Fragment>
      <LatestPosts />
      <Link to="/posts">See all posts</Link>
    </React.Fragment>
  );
}

export default Homepage;
