import React, { useReducer, useRef, useState } from 'react'
import todoReducer from '../reducers/todoReducer'

let initialState = [];

export default function TodoList() {
    let [state, dispatch] = useReducer(todoReducer, initialState);
    // let [text, setText] = useState(''); // Controlled Component
    let textRef = useRef(); // reference, pointer // uncontrolled component
    function addTodo() {
        let text = textRef.current.value; // from DOM
        dispatch({ type: 'ADD', payload: text })
        // setText("");
        textRef.current.value = "";
    }
    return (
        <div>
            <h1>Todo List</h1>
            {/* <input type="text" value={text} onChange={(event) => setText(event.target.value)} /> */}
            <input type='text' ref={textRef} />
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
