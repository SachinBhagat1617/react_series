import { createContext,useContext } from "react";

export const todoContext=createContext(
    {
        todos:[
            {
                todo:"todoMsg",
                id:1,
                completed:false
            }
        ],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        deleteTodo:(id,todo)=>{},
        toggleComplete:(id)=>{}
    }
)

export const TodoProvider=todoContext.Provider

export const useTodo=()=>{
    return useContext(todoContext)
}