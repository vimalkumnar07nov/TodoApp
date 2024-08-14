import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {removeTodo} from "../Feature/todos/todoSlice";

const TodoList = ()=>{
    const todos  = useSelector(state => state.todos);
    const dispatch = useDispatch();
    console.log(todos);
    

    return(
        <>
            <div className="container">
                <ul className="list-group todos mx-auto text-light delete">

                    {todos.map((todo)=>(
                        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{todo.text}</span>
                            <i onClick={()=> dispatch(removeTodo(todo.id))} className="far fa-trash-alt delete" />
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
};

export default TodoList;