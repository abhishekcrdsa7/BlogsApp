import React, { Component } from 'react';
import { fetchposts } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
      this.props.fetchposts();
  }

  renderPosts() {
    return _.map(this.props.posts,function(post) {
      return <li key= {post.id} className="list-group-item"><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
    });
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add New Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return {
    posts: reduxState.fetchPosts
  }
}
export default connect(mapStateToProps,{ fetchposts })(PostsIndex);
