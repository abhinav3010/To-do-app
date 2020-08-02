import React, { Component } from 'react';
import { connect } from 'react-redux';
class ItemInputForm extends Component {

    render() {
        return (
            <div>
                <h3 className='center blue-text'>To-Do APP</h3>
                <h3 className='blue-text'>Add new Todos</h3>
                <form onSubmit={(e) => { this.props.handleSubmit(e, this.props.input); this.props.handleInputChange(''); }} >
                    <input onChange={(e) => { this.props.handleInputChange(e.target.value) }} value={this.props.input} />
                    <button className="btn waves-effect blue" >ADD</button>
                </form>
                <br />
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        input: state.input
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: text => { dispatch({ type: 'INPUT_UPDATE', text }) }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemInputForm);