import React, { Component } from 'react';
import store from './store/index.js';
import {connect} from 'react-redux'
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
    }
    render() { 
        return (
            <div>
                <input value={this.props.inputValue} />
                <div><input /><button>提交</button></div>
                <ul>
                    <li>JSPang</li>
                </ul>
            </div>
            );
    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue
    }
}
export default connect(stateToProps,null)(TodoList);