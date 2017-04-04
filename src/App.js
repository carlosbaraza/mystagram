import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { BottomBar } from './components/BottomBar';
import { Post } from './components/Post';

const posts = [
  {
    userName: "Kittenlove",
    userImage: "https://img.emc.gs/25afa513330b0e191d35e2b66e3367912c500b2d/687474703a2f2f696d6775722e636f6d2f556473727152432e6a7067/",
    imageUrl: "https://assets.rbl.ms/9241419/980x.jpg",
    likes: 257,
    liked: true,
  },
  {
    userName: "Birdies",
    userImage: "https://s-media-cache-ak0.pinimg.com/originals/0e/16/51/0e1651ac67fa9fbd04ff08508b064cb5.jpg",
    imageUrl: "http://d2fbmjy3x0sdua.cloudfront.net/cdn/farfuture/xX2dO2IN71t0tfGOITDQ0HSLNOml6xiRu_z3MU6Xx5M/mtime:1486669862/sites/default/files/styles/engagement_card/public/sfw_apa_2013_28342_232388_briankushner_blue_jay_kk_high.jpg?itok=ttMfUhUu",
    likes: 240601,
    liked: false,
  }
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
