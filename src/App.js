import React, { Component } from 'react';
import ToggleList from './components/ToggleList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Personal List Data</h1>
      <ToggleList />
      </div>
    );
  }
}

export default App;