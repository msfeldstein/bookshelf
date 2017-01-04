import React, { Component } from 'react';
import './App.css';
import BookGrid from './BookGrid'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BookGrid />
      </div>
    );
  }
}

export default App;
