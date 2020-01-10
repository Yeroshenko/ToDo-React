import React from 'react'

import TodoListItem from '../todo-list-item'

import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps} = item // OBJECT DESTRUCTURING

        return (
            <li key = {item.id} className = 'list-group-item'> 
                <TodoListItem { ...itemProps }
                onDeleted = {() => onDeleted(id) }
                onToggleImportant = {() => onToggleImportant(id)}
                onToggleDone = {() => onToggleDone(id)} /> 
            </li> // SPREAD OPERATOR FOR OBJECTS 
        )
    })

    return (
        <ul className = 'list-group todo-list'>
            { elements }
        </ul>
    )
}

export default TodoList