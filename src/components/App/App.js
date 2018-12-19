import React, { Component } from 'react';
import * as API from '../../apiCalls/apiCalls.js'
import './App.css';
import { Route } from 'react-router-dom'
import  MovieContainer  from '../MovieContainer/MovieContainer'
import { Header } from '../Header/Header'; 


class App extends Component {
  constructor() {
    super()
    this.state = {
      loginSelected: false
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <MovieContainer movies={this.state.movies}/>}/>
      </div>
    );
  }
}


export default App;
