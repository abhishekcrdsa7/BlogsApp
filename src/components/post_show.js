import React, { Component } from 'react';
import { fetchPost,deletePost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostShow extends Component {

componentDidMount() {
  const { id } = this.props.match.params;
  this.props.fetchPost(id);
}

redirect() {
  this.props.history.push('/posts');
}

deletePost() {
  const { id } = this.props.match.params;
  this.props.deletePost(id,this.redirect.bind(this));
}

  render(){
    const { post } = this.props;
    if(!post){
      return (<div>Loading</div>);
    }
    return(
      <div>
        <div className="text-xs-right">
        <button className="btn btn-danger" onClick={this.deletePost.bind(this)}>Delete Post</button>
        </div>
        <Link to="/posts">Go Back</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ fetchPosts },ownProps){
  return {post: fetchPosts[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{ fetchPost,deletePost })(PostShow);
