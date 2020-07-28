import React, { Component } from 'react';

class App extends Component {
  state = {
    items: []
  };
  handleADD = (e) => {
    this.state.items.push(document.getElementById('inp').value);
    document.getElementById('list').innerHTML += `<li>${document.getElementById('inp').value}</li>`;
    document.getElementById('inp').value = '';
    console.log(document.querySelector('li'));
    e.preventDefault();
  };
  render() {
    return (
      <div className="App" >
        <h1>To-Do APP</h1>
        <form onSubmit={this.handleADD} >
          <input id='inp' />
          <button>ADD</button>
        </form>
        <ul id='list'></ul>
      </div>
    );
  }
}

export default App;
