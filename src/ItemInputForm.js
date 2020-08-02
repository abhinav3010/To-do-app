import React, { Component } from 'react';
class ItemInputForm extends Component {
    state = {
        input: ''
    }
    handleInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    };
    render() {
        return (
            <div>
                <h3 className='center blue-text'>To-Do APP</h3>
                <h3 className='blue-text'>Add new Todos</h3>
                <form onSubmit={(e) => { this.props.handleSubmit(e, this.state.input); this.setState({ input: '' }) }} >
                    <input onChange={this.handleInputChange} value={this.state.input} />
                    <button className="btn waves-effect blue" >ADD</button>
                </form>
                <br />
            </div>
        );
    }
};
export default ItemInputForm;