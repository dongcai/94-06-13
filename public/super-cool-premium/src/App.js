import React, { Component } from 'react';
import Nav from './components/Nav';
import TopicForm from './components/TopicForm';
import './App.css';

const topics = ['php', 'jquery', 'reactjs'];

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <main role="main" className="container">
              <div className="web-revolution">
                  <h1>Revolution of Dynamic Website - React Way</h1>
                  <p>Build with <a href="https://github.com/facebook/create-react-app">Create React App</a></p>
                  <TopicForm topics={topics}/>
              </div>
          </main>
      </div>
    );
  }
}

export default App;
