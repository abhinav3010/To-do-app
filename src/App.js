import React, { Component } from 'react';
import ActiveItems from './ActiveItems';
import CompletedItems from './CompletedItems'
import ItemInputForm from './ItemInputForm.js';

class App extends Component {
  state = {
    items: []
  };

  handleAdditionToActiveList = (e, itemText) => {
    e.preventDefault();
    const text = itemText.trim();
    if (text === "") {
      return;
    }
    this.setState({
      items: [
        ...this.state.items,
        {
          text: text,
          id: Math.random(),
          isEditable: false,
          isChecked: false
        }
      ]
    })
  };

  handleDelete = (id) => {
    this.setState({
      items: this.state.items.filter(element => (element.id !== id))
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === Number(e.target.value)) {
          item.isChecked = !item.isChecked;
        }
        return item;
      })
    });
  }

  handleEdit = (id) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id === id) {
          item.isEditable = !item.isEditable;
        }
        return item;
      })
    });
  }
  handleItemTextChange = (e, id) => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.text = e.target.value
        }
        return item;
      })
    });
  }

  render() {
    return (
      <div className="App container" >
        <ItemInputForm handleSubmit={this.handleAdditionToActiveList} />
        <ActiveItems
          activeItems={this.state.items.filter(item => item.isChecked === false)}
          handleDelete={this.handleDelete} handleCheckbox={this.handleCheckbox}
          handleEdit={this.handleEdit} handleItemTextChange={this.handleItemTextChange}
        />
        <CompletedItems
          completedItems={this.state.items.filter(item => item.isChecked === true)}
          handleDelete={this.handleDelete}
          handleCheckbox={this.handleCheckbox}
        />
      </div>
    );
  }
}

export default App;
