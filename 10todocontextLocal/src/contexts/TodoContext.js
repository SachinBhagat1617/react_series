 import {createContext,useContext} from "react"

 //pahle context create karo
//object ke andar hai todos,addTodo,updateTodo,deleteTodo,..)
 export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete: (id) => {}

 })


 // contextProvider banao ab
 export const TodoProvider=TodoContext.Provider

 export const useTodo = () => {
    return useContext(TodoContext)
 }
