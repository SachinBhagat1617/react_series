import React, { useState } from "react";
import { useTodo } from "../contexts";


function TodoItem({ todo }) {
    const [todoMsg,setTodoMsg]=useState(todo.todo) // todo.todo pahela todo wo parameter hai TodoItem fn ka and dusra todo -> todos global wala object ka todo hai jisme message store hai
    const {updateTodo, deleteTodo, toggleComplete} =useTodo()
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const editTodo = ()=>{
        //savind of edited data
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                // value={todoMsg}
                // onChange={(e) => setTodoMsg(e.target.value)}
                // readOnly={!isTodoEditable}
                value={todoMsg}
                onChange={(e)=>setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable} // readonly=true  {!false} means tum edit nahi  kar sakte ho
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if(todo.completed) return;

                    if(isTodoEditable){ // now you have to save
                        editTodo()
                    }else{
                        setIsTodoEditable((prev)=>!prev) // false -> true  // uske bad input box mai changes ayaga aur todoMsg set karega and jab wo wapas click karega tab jake true value ke editTodo() call hoga
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
