import React, { useReducer, useState } from 'react'
import todoReducer from '../reducers/todoReducer'

let initialState = [];

export default function TodoList() {
    let [state, dispatch] = useReducer(todoReducer, initialState);
    let [text, setText] = useState('');

    function addTodo() {
        dispatch({ type: 'ADD', payload: text })
        setText("");
    }
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
            <button type='button' onClick={() => addTodo()}>Add todo</button>
            <ul>
                {
                    state.map(todo => (
                        <li>
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
                            >
                                {todo.text}
                            </span>
                            &nbsp;
                            <button>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
