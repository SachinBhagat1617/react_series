import { useState,useEffect,useCallback,useRef } from 'react'

function App() {
  const[password,setPassword]=useState("")
  const[length,setLength]=useState(8)
  const[character,setCharacter]=useState(false)
  const[number,setNumber]=useState(false)

  //useCallback takes a callback fn and its dependencies it does memoization and store the result in cache and increase the efficiency
  const generatePass=useCallback(()=>{
    let pass=""
    let a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(number) a+="1234567890"
    if(character) a+="!@#$%^&*-_+=[]{}~`"
    for(let i=1;i<=length;i++){
      let index=Math.floor(Math.random()*a.length+1)
      pass+=a.charAt(index)
    }
    setPassword(pass)
  },[length,character,number])

  //useEffect takes a callback fn and some dependencies here the callback fn is executed whenever there is any changes in then dependencies
  //jaise yaha pe agar tum number yar charcter checkbox pe tick kiye to callback fn geneatePass se new password generate kardega
  //What if you don't use there will be too many rerenders and will stuck in infinite loop because chota bhi changes mai generatePass call ho jayega

  useEffect(()=>{
    generatePass()
  },[length,number,character])
  
  
  const copyPasswordToClipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full h-screen bg-black'>
        <div className='mx-[25%] bg-slate-700 rounded-xl relative top-11'>
          <h1 className='text-white justify-center flex'>Password Generator</h1>
          <div className='flex w-full p-5'>
             <input type="text"
                value={password}
                placeholder="Password"
                className='w-full rounded-xl text-orange-500'
                readOnly
             />
            <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-xl'
            onClick={copyPasswordToClipboard}
            >copy
            </button>
          </div>
          <div className='text-white flex flex-wrap gap-1 p-2'>
            <input type="range"
              min={6}
              max={100}
              className='cursor-pointer'
              value={length}
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className=''>Length: {length}</label>
            <input type="checkbox"
              defaultChecked={character}
              onChange={()=>{
                setCharacter((prev)=>!prev)
              }}
            />
            {/* setCharacter,setLength, etc jaise fn ke andar tum iss tarah se fn likh sakte jisme prev uska current value */}
            <label >Character</label>
            <input type="checkbox"
              defaultChecked={number}
              onChange={()=>{
                setNumber((prev)=>!prev)
              }}
            />
            <label>Number</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
