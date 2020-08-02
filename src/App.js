import React, { Component } from 'react';
import ActiveItems from './ActiveItems';
import CompletedItems from './CompletedItems'
import ItemInputForm from './ItemInputForm.js';
import { connect } from 'react-redux';

class App extends Component {

  handleAdditionToActiveList = (e, itemText) => {
    e.preventDefault();
    const text = itemText.trim();
    if (text === "") {
      return;
    }
    this.props.addItemToStore({
      text: text,
      id: Math.random(),
      isEditable: false,
      isChecked: false
    });
  };

  handleCheckbox = (e) => {
    this.props.modifyItemsInStore(this.props.items.map((item) => {
      if (item.id === Number(e.target.value)) {
        item.isChecked = !item.isChecked;
      }
      return item;
    }));
  }

  handleEdit = (id) => {
    this.props.modifyItemsInStore(this.props.items.map((item) => {
      if (item.id === id) {
        item.isEditable = !item.isEditable;
      }
      return item;
    }));
  }
  handleItemTextChange = (e, id) => {
    this.props.modifyItemsInStore(this.props.items.map(item => {
      if (item.id === id) {
        item.text = e.target.value
      }
      return item;
    }));
  }

  render() {
    return (
      <div className="App container" >
        <ItemInputForm handleSubmit={this.handleAdditionToActiveList} />
        <ActiveItems
          activeItems={this.props.items.filter(item => item.isChecked === false)}
          handleDelete={this.props.deleteItemFromStore}
          handleCheckbox={this.handleCheckbox}
          handleEdit={this.handleEdit}
          handleItemTextChange={this.handleItemTextChange}
        />
        <CompletedItems
          completedItems={this.props.items.filter(item => item.isChecked === true)}
          handleDelete={this.props.deleteItemFromStore}
          handleCheckbox={this.handleCheckbox}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToStore: item => { dispatch({ type: 'ADD_ITEM', item }) },
    deleteItemFromStore: id => { dispatch({ type: 'DELETE_ITEM', id }) },
    modifyItemsInStore: items => { dispatch({ type: 'MODIFY_ITEMS', items }) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
