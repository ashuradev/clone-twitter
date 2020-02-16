import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Post from '../components/Post';

import api from '../services/api';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      const { data } = await api.get('/feed');

      setPosts(data.data);
    };

    loadFeed();
  }, []);

  return (
    <>
      <Header>
        <h2>Página inicial</h2>
      </Header>

      {posts.map(post => (
        <Post body={post.body} user={post.user} key={post.id} />
      ))}
    </>
  );
};

export default Feed;
