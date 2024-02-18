import {createSlice,nanoid} from '@reduxjs/toolkit'
 //nanoid gives unique_id

const initialState = {
    todos: [{id:1,text:"Hello World"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{ // yaha 
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{ // yaha pe action ke andar apko id milegi
            //@overwrite
            // filter gives all the true value
            state.todos=state.todos.filter(
                (todo)=>todo.id!=action.payload)
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer


