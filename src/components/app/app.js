import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-form'
import Autor from '../autor'

import './app.css'

export default class App extends Component {

    maxId = 1

    state = {
        todoData: [
            this.createTodoItem('Drink Coffe'),
            this.createTodoItem('Make awesome App'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Sleep')
        ],
        term: '',
        filter: 'all' // all || active || done
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id)
            
            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData, 
                newItem
            ]

            return {
                todoData: newArray
            }
        })
    }
    
    toggleProperty(arr, id, propName) {
            const idx = arr.findIndex((el) => el.id === id)

            const oldItem = arr[idx]
            const newItem = { ...oldItem, [propName]: !oldItem[propName]}

            return [
                ...arr.slice(0, idx), 
                newItem,
                ...arr.slice(idx + 1)
            ]
        
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return { 
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }
    
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return { 
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    search(items ,term) {

        if (term.label === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    }

    onSearchChange = (term) => {
        this.setState({ term })
    }

    onFilterChange = (filter) => {
        this.setState({ filter })
    }

    filter(items, filter) {

        switch(filter){
            case 'all':
                return items
            case 'active':
                return items.filter((items) => !items.done)
            case 'done':
                return items.filter((items) => items.done)
            default:
                return items
        }
    }

    render() {
        const { todoData, term, filter } = this.state

        const visibleItems = this.filter(
            this.search(todoData, term), filter)
        const doneCount = todoData.filter((el) => el.done).length
        const todoCount = todoData.length - doneCount
    
        return (
            <div>
                <div className = 'todo-app'>
                    <AppHeader toDo = {todoCount} done = {doneCount} />
                    <div className = 'top-panel'>
                        <SearchPanel 
                            onSearchChange = {this.onSearchChange} />
                        <ItemStatusFilter 
                            filter = {filter}
                            onFilterChange = {this.onFilterChange} />
                    </div>

                    <TodoList
                        todos = {visibleItems}
                        onDeleted = { this.deleteItem }
                        onToggleImportant = { this.onToggleImportant }
                        onToggleDone = { this.onToggleDone }
                    />

                    <ItemAddForm onItemAdded = { this.addItem } />
                </div>

                <Autor />
            </div>

        );
      }
}
