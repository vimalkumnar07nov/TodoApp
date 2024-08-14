import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(add(input));
        setInput("")
    }

  return (
      <>
        
          <form onSubmit={addTodoHandler} >
              <input 
                  type='text'
                  placeholder='entre todo list..'
                  value={input}
                  onChange={(e)=> setInput(e.target.value) }
                  
              />
              <button type='submit'>Add List</button>

              

          </form>
    </>
  )
}

export default AddTodo