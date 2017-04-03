import React from 'react';
import './Post.css';

export class Post extends React.Component {
  constructor(props) {
    super(props);

    const { post } = props;

    this.state = {
      liked: post.liked,
    };
  }

  handleLike() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const { post } = this.props;

    let heartClass;
    if (this.state.liked) {
      heartClass = 'fa fa-heart';
    } else {
      heartClass = 'fa fa-heart-o';
    }

    return (
      <div className="row post">
         <div className="col-xs-12 header">
           <h4>
             <img src={post.userImage} />
             {post.userName}
           </h4>
         </div>

         <div className="col-xs-12 image">
           <img src={post.imageUrl} onClick={this.handleLike.bind(this)} />
         </div>

         <div className="col-xs-12 controls">
           <i className={heartClass}></i>
           <i className="fa fa-comment-o"></i>
           <i className="fa fa-paper-plane-o"></i>
           <i className="fa fa-bookmark-o pull-right"></i>
         </div>

         <div className="col-xs-12 likes">
           <i className="fa fa-heart"></i> {post.likes} likes
         </div>
      </div>
    );
  }
}
