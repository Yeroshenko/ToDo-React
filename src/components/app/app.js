import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'

import './app.css'

const App = () => {

    const todoData = [
        { label: 'Drink Coffe', important: false, id: "1"},
        { label: 'Make awesome App', important: true, id: "2"},
        { label: 'Have a lunch', important: false,  id: "3"},
        { label: 'Sleep', important: true,  id: "4"},
    ]

    return (
       <div className = 'todo-app'> 
            <AppHeader toDo = {2} done = {3}/>
            <div className = 'top-panel'>
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div> 
    );
};

export default App