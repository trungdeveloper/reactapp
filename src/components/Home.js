import React, { Component } from 'react'
import axios from 'axios'
import AddPost from './AddPost';
import { Link } from 'react-router-dom'

class Home extends Component {
  state = {
    posts: []
  }


  addPost = (post) => {
    post.id = Math.random();
    let posts = [post,...this.state.posts];
    this.setState({ posts });
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        this.setState({
          posts: response.data.slice(0,10)
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src="https://raw.githubusercontent.com/iamshaunjp/react-redux-complete-playlist/lesson-33/poketimes/src/pokeball.png" alt=""/>
            <div className="card-content">
              <Link to={'/posts/'+post.id}>
              <span className="card-title red-text">{post.title}</span>
              </Link>
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