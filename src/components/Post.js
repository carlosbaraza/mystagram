import React from 'react';
import './Post.css';
import Hammer from 'react-hammerjs';

export class Post extends React.Component {
  constructor(props) {
    super(props);

    const { post } = props;

    this.state = {
      liked: post.liked,
      heartAnimations: [],
    };
  }

  handleLike() {
    if (!this.state.liked) this.showHeartAnimation();
    this.setState({
      liked: !this.state.liked,
    });
  }

  showHeartAnimation() {
    const id = (+(new Date())).toString();

    let heartAnimations = this.state.heartAnimations;
    heartAnimations.push(<i className="fa fa-heart" key={id}></i>);

    this.setState({
      heartAnimations: heartAnimations,
    });

    setTimeout(this.hideHeartAnimation.bind(this, id), 500);
  }

  hideHeartAnimation(id) {
    this.setState({
      heartAnimations: this.state.heartAnimations.filter(element => {
        return element.key !== id;
      }),
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
           { this.state.heartAnimations }
           <Hammer onDoubleTap={this.handleLike.bind(this)}>
             <img src={post.imageUrl} />
           </Hammer>
         </div>

         <div className="col-xs-12 controls">
           <i className={heartClass} onClick={this.handleLike.bind(this)}></i>
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
