import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import {Provider } from 'react-redux'
import store from './store'

const App=(
    // 被provider 包裹的内容就都可以使用store
    <Provider  store={store}>  
        <TodoList />
    </Provider >
)


ReactDOM.render(App, document.getElementById('root'));