import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../Feature/todos/todoSlice";

const AddTodo = ()=>{

    const[input,setInpute] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInpute('');
    }

    return(
        <>
        <div className="container">
            <header className="text-center text-light my-4">
                <h1 className="mb-4">Todo List</h1>
                <form onSubmit={handleSubmit} className="add text-center my-4" >
                    <label className="text-light">Add a new todo</label>
                    <input
                        className="form-control m-auto"
                        type="text"
                        value={input}
                        placeholder="Enter todo"
                        onChange={(e)=> setInpute(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-light my-3">Add</button>
                </form>
            </header>


        </div>
        </>
    );
};

export default AddTodo;