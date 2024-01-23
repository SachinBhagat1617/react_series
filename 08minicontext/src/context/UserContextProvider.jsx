import React from 'react'
import UserContext from './UserContext';


const UserContextProvider=({children})=>{
    //user and setUser ko globally avilable karwana hai
    const[user,setUser]=React.useState("")
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider >
    )
}

export default UserContextProvider