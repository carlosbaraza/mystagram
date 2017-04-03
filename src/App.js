import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { BottomBar } from './components/BottomBar';
import { Post } from './components/Post';

const posts = [
  {
    userName: 'Carlos',
    userImage: 'http://www.gravatar.com/avatar/d5c3fc3569c74e38843ea47094ed551d?s=250&d=mm&r=x',
    imageUrl: 'http://blog.talentrocket.co.uk/wp-content/uploads/2014/08/instagram-crop.jpg',
    likes: 159,
    liked: true,
  },
  {
    userName: 'Esther',
    userImage: 'http://shareda.buzz/wp-content/uploads/2016/03/instashit.jpg',
    imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/60/cf/db/60cfdb96744a9cc380f96b23b1d7550d.jpg',
    likes: 230,
    liked: false,
  },
];

class App extends Component {
  renderPosts() {
    return posts.map((post, i) => (
      <Post
        key={i}
        post={post}
      />
    ));
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          { this.renderPosts() }
        </div>

        <BottomBar />
      </div>
    );
  }
}

export default App;
