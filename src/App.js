import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import Post from './Post/Post';
import { db } from './firebase';

function App() {
  // state for the posts to show on home page
  const [posts, setPosts] = useState([]);

  // useEffect runs a piece of code based on a specific condition
  useEffect(() => {
    // this is where the code runs
      db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })));
      })
    },[]);

  return (
    <div className="App">
      <Header />

      {/* Mapping Posts from the hooks to display on homepage */}
      {
        posts.map(({id, post}) => (
          <Post 
            key = {id}
            imageURL={post.imageURL}
            username={post.username}
            caption={post.caption}
          />
        ))
      }
    </div>
  );
}

export default App;
