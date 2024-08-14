import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../features/todo/todoSlice'

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            <div>Todos</div>
            {todos.map((todos) => (
                <li key={todos.id} >
                    {todos.text}
                    <button onClick={()=>dispatch(remove(todos.id))}> X </button>
                </li>
                
            ))}
      
        </> 
    );
}

export default Todos