import React from 'react'

import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => { // OBJECT DESTRUCTURING

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
    <div className = 'todo-list-item' >
        <div
            className='todo-list-item-label'
            style = {style}>
            { label }
        </div>

        <div className = 'todo-list-item-control'>    
            <button type='button'
                className='btn btn-outline-success btn-sm'>

                <i className='fa fa-exclamation' />
            </button>

            <button type='button'
                className='btn btn-outline-danger btn-sm'>
                
                <i className='fa fa-trash-o' />
            </button>
        </div>
    </div>)
}

export default TodoListItem