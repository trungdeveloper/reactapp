import React, { Component } from 'react'
import axios from 'axios'
import AddPost from './AddPost';

class Home extends Component {
  state = {
    posts: []
  }


  addPost = (post) => {
    post.id = Math.random();
    let posts = [...this.state.posts,post];
    this.setState({ posts });
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(respon => {
        console.log(respon);
        this.setState({
          posts: respon.data.slice(0,10)
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          <AddPost addPost={this.addPost}/>
          {postList}
        </div>
      </div>
    )
  }
}

export default Home