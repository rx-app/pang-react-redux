import React, { Component } from 'react';
import store from './store.js';
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();
    }
    render() { 
        return (
            <div>
                <input value={this.state.inputValue} />
                <div><input /><button>提交</button></div>
                <ul>
                    <li>JSPang</li>
                </ul>
            </div>
            );
    }
}
export default TodoList;