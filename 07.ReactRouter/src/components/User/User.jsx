import React from 'react'
import { useParams } from 'react-router-dom'
function User(){
    // useParams: The useParams hook returns an object of key/value pairs of the 
    //dynamic params from the current URL that were matched by the <Route path>
    const {userid}=useParams()
    return (
        <div className='bg-gray-600 text-white text-3xl p-4 flex justify-center'>
            {/* user ke bad colon isliye kyunki uske baad hum kuch value display
            bhi karna chahte hai */}
            User:{userid}
        </div>
    )
}
export default User