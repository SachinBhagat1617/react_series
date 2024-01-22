import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

//useContext:->The useContext hook is part of the React Hooks API and is used for consuming values from a React context. 
//It provides a way to subscribe to a context within a functional component. Context in React is a mechanism for sharing values 
//like themes, user authentication status, or any global configuration, between components without explicitly passing props through 
//every level of the component tree.


function Login(){

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    //dataset kar rahe hai
    //konsa prop use karna hai =useContext(from which context-file)
    const {setUser}=useContext(UserContext)

    //useContext(UserContext), it's telling React to look up the component tree and find the nearest UserContext.Provider. 
    //It then returns the current value prop of that provider. This allows you to access the context value (in this case, the user object) 
    //without having to pass it down through the component tree as props.
    
    const handleSubmit=(e)=>{   
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='UserName'/>
            {"  "}
            <input type="text" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login