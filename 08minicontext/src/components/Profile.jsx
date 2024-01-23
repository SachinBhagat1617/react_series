import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile(){

    const {user}=useContext(UserContext)
    console.log(typeof(user))
    if (!user) 
        return(
            <>
                <div>Please LogIn</div>
            </>
        )
    return(
        <>
            <div>Welcome {user.username}</div>
        </>
    )
}
export default Profile