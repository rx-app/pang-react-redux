import React, { Component } from 'react';
// import store from './store'
import {connect} from 'react-redux'

const TodoList = (props) => {
    
    let {inputValue,inputChange,addItem,list} = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={addItem}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
        );
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            console.log(e.target.value)
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        addItem(){
            console.log('aaa')
            let action = {
                type:'add_item',
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(TodoList);