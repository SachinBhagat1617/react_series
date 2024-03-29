import React, { useState } from "react";
import { useTodo } from "../contexts";


function TodoForm() {
    const [todo,setTodo]=useState("")
    const {addTodo,todos}=useTodo() // bahar nikalne ke liye second bracket use karo
    const add=(e)=>{
        
        e.preventDefault()
        if(!todo) return
        // addTodo({...todo,todo:todo})
        addTodo({todo:todo,completed:false}) // yaha par todo:todo pahela todo wo global wala hai dusra todo yaha ka local wala hai jo setTodo se aarah hai
       setTodo("") //thoda cleanUp hogaya
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                {/* since button ka type submit hai to koi call karne ka jaroorat nahi */}
                Add
            </button>
        </form>
    );
}

export default TodoForm;

