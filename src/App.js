import React, { Component } from 'react';
import ADDitems from './ADDitems';
import CompletedItems from './CompletedItems'

class App extends Component {
  state = {
    items: [],
    IdList: new Set(),
    completedItemsList: []
  };
  generateUniqueID = () => {
    let RandNum = Math.random();
    while (this.state.IdList.has(RandNum)) {
      RandNum = Math.random();
    };
    this.state.IdList.add(RandNum);
    return RandNum;

  }
  handleADD = (e) => {
    e.preventDefault();
    let text = document.getElementById('inp').value;
    document.getElementById('inp').value = '';
    text = text.trimLeft();
    text = text.trimRight();
    if (text === "") {
      return;
    }
    let id = this.generateUniqueID();
    let items = [...this.state.items];
    items.push({
      text: text,
      id: id
    });
    this.setState({
      items: items
    });
    console.log(this.state);
  };
  handleDelete = (id) => {
    console.log(id, this.state.IdList);
    let items = this.state.items.filter((element) => {
      if (element.id !== id) {
        return true;
      }
      return false;
    });
    let completedItemsList = this.state.completedItemsList.filter((element) => {
      if (element.id !== id) {
        return true;
      }
      return false;
    });
    this.state.IdList.delete(id);
    this.setState({
      items: items,
      completedItemsList: completedItemsList
    });
  };
  handleComplete = (id) => {
    let completedItemsList = [...this.state.completedItemsList];
    let doneItem = null;
    let items = this.state.items.filter((element) => {
      if (element.id !== id) {
        return true;
      }
      doneItem = element;
      return false;
    });
    completedItemsList.push(doneItem);
    this.setState({
      items: items,
      completedItemsList: completedItemsList
    })
  }

  render() {
    return (
      <div className="App" >
        <h1>To-Do APP</h1>
        <form onSubmit={this.handleADD} >
          <input id='inp' />
          <button>ADD</button>
        </form>
        <br />
        <h2>Active</h2>
        <ADDitems elements={this.state.items} handleDelete={this.handleDelete} handleComplete={this.handleComplete} />
        <h2>Completed</h2>
        <CompletedItems completedItemsList={this.state.completedItemsList} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
