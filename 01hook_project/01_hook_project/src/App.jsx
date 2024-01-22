import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15) // it is hook state (useState) 
  //let [variable,function]=useState(default value) ->setcounter is a function which will set the counter value every where in DOM
  /*useState is a React Hook that lets you add a state variable to your component.
    const [state, setState] = useState(initialState);*/ 
  
  /*useState returns an array with exactly two values:
  The current state. During the first render, it will match the initialState you have passed.
  The set function that lets you update the state to a different value and trigger a re-render.*/  

/* hook hum log tab use karte hai jab hum chahte hai ki agar hum ek jagah kisi Variable ke UI mai update kar rahe hai to wo har jagah reflect ho
  eg:- yaha par hum counter value ko update kar rahe hai to har jagah UI mai update ho raha hai
*/ 

  const add=()=>{
    if(counter<=19)
      setcounter(counter+1)
  }
  const decrease=()=>{
    if(counter>=1)
      setcounter(counter-1)
  }
  return (
    <>
      <h1>counter Value {counter}</h1>
      <br></br>
      <button onClick={add}>Increase Value {counter}</button> 
      {/* here we don't write add() because if we write then it is call immediately
      and hamme isse tabhi call karna hai jab button mai click ho is liye we will 
      pass the reference of the function */}
      <br/>
      <button onClick={decrease}>Decrease Value {counter}</button>
    </>
  )
}

export default App
