import { useState ,useEffect} from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App(){
  const [todos,setTodos]=useState([]) // empty list
  
  const addTodo = (todo)=>{
    //setTodos(todo)
    //if you do like this then it will empty the list first and then append todo but you will loose your all prevTodo
    //for this reason you hav got prev parameter from useState

    setTodos((prev)=>([{id:Date.now(),...todo},...prev]))
  }

  const updateTodo=(id,todo) =>{
    // when you do setTodos(prev) then todos list becomes empty to tumhara jab condition true
    //bhi ho jata hai tab todo append hota hai list mai and jab condition false hota hai tab prevTodo
    //append hota hai

    setTodos((prev)=>(
      prev.map((prevTodo)=>(
        prevTodo.id===id ? prevTodo=todo :prevTodo
      ))
    ))
  }

  const deleteTodo=(id)=>{

    setTodos((prev)=>(
      prev.filter((prevTodo)=>(
        prevTodo.id!=id 
      ))
    ))
  }
  
  const toggleComplete=(id)=>{
    setTodos((prev)=>(
      prev.map((prevTodo)=>(
        prevTodo.id==id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo
      ))
    ))
  }
  useEffect(()=>{
    //localStorage.getItems("String(key)")
    const todos=JSON.parse(localStorage.getItem("todos")); // key name->todos and  todos yaha pe local variable bhi hai dono mai koi link nahi hai
    //since local storage will return string so we have convert into object therfore we use JSON.parse
    // JSON.parse() is used to parse a JSON-formatted string and convert it into a JavaScript object.
    //.json() (JavaScript, for working with Fetch API):
    //When using the Fetch API in JavaScript to make HTTP requests, you can use the .json() method to extract the JSON content from the response.
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[]) // empty dependency means it will call useEffect once while reloading the page

  useEffect(()=>{
    //JSON.stringify() is a method in JavaScript that is used to convert a JavaScript object or value into a JSON-formatted string. 
    //localStorage.setItems("String(key)","String("Vallue"))
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


    return(
      // //object ke andar hai todos,addTodo,updateTodo,deleteTodo,.. to destructure karna padega using curly braces {}
      <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((eachtodo)=>(
                  <div key={eachtodo.id}
                    className='w-full'>
                      <TodoItem todo={eachtodo} /> 
                  </div>
                ))}
            </div>
        </div>
    </div>
    </TodoProvider>
    )
}

export default App



