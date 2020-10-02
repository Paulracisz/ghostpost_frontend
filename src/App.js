import React from 'react';
import './App.css';
import NewPost from './NewPost'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [],
      }
    }
    componentDidMount() {
      fetch('http://localhost:8000/api/post/')
      .then((res) => res.json())
      .then(data => {
        this.setState({results: data})
      })
    }
      handleChange = (e) => {
      fetch('http://localhost:8000/api/post/get_boasts/')
      .then((res) =>  res.json())
      .then(data => {
        this.setState({results: data})
      })
    }
    handleRoastChange = (e) => {
      fetch('http://localhost:8000/api/post/get_roasts/')
      .then((res) => res.json())
      .then(data => {
        this.setState({results: data})
      })
    }
    handleSortChange = (e) => {
      fetch('http://localhost:8000/api/post/sort_posts/')
      .then((res) => res.json())
      .then(data => {
        this.setState({results: data})
      })
    }
    handleUpVote = (e, id) => {
      fetch('http://localhost:8000/api/post/'+id+'/up_vote/', {method: "POST",headers: { "Content-Type": "application/json" }})
      .then((res) => res.json())
      .then(data => {window.location.reload()})
    }
    render() {
    return (
    <div>
    <ul>
      {this.state.results.map((r) => (
      <>
      {/* 'description',
            'roast_or_boast',
            'up_vote',
            'down_vote',
            'time_created' */}
      <h1>{r.description}</h1>
      <li>{`roast or boast: ${r.roast_or_boast}`}</li>
      <li>Up Vote Count:{r.up_vote}</li>
      <li>Down Vote Count:{r.down_vote}</li>
      <li>Time Created:{r.time_created}</li>
      <button onClick={(e) => this.handleUpVote(e, r.id)}>Up Vote This Post</button>
      <button onClick={this.handleDownVote}>Down Vote This Post</button>
      <br/>
      </>
    ))}</ul>
    <button onClick={this.handleChange}>Filter By Boasts</button>
    <button onClick={this.handleRoastChange}>Filter By Roasts</button>
    <button onClick={this.handleSortChange}>Filter All By Vote Count</button>
    <NewPost/>
    </div>
    );
    }
  }

export default App;
