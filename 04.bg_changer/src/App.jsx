import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("#212121")

  return (
    <>
      <div className="w-full h-screen duration-200 relative flex-col flex-wrap items-end"
      style={{backgroundColor:color}}
      >
        <div className='bg-white rounded-xl flex p-1 flex-wrap gap-3 items-end'>
          <button onClick={()=>{setColor("Red")}} className='bg-red-600 rounded-xl p-1'>
            Red
          </button>
          <button onClick={()=>{setColor("rgb(96 165 250)")}} className='bg-blue-400 rounded-xl p-1'>
            Blue
          </button>
          <button onClick={()=>{setColor("rgb(52 211 153)")}} className='bg-emerald-400 rounded-xl p-1'>
            Light Green
          </button>
          <button onClick={()=>{setColor("rgb(168 85 247)")}} className='bg-purple-500 rounded-xl p-1'>
            Purple
          </button>
          <button onClick={()=>{setColor("rgb(234 179 8)")}} className='bg-yellow-500 rounded-xl p-1'>
            Yellow
          </button>
          <button onClick={()=>{setColor("Red")}} className='bg-red-600 rounded-xl p-1'>
            Red
          </button>
          <button onClick={()=>{setColor("rgb(96 165 250)")}} className='bg-blue-400 rounded-xl p-1'>
            Blue
          </button>
          <button onClick={()=>{setColor("rgb(52 211 153)")}} className='bg-emerald-400 rounded-xl p-1'>
            Light Green
          </button>
          <button onClick={()=>{setColor("rgb(168 85 247)")}} className='bg-purple-500 rounded-xl p-1'>
            Purple
          </button>
          <button onClick={()=>{setColor("rgb(234 179 8)")}} className='bg-yellow-500 rounded-xl p-1'>
            Yellow
          </button>
          <button onClick={()=>{setColor("Red")}} className='bg-red-600 rounded-xl p-1'>
            Red
          </button>
          <button onClick={()=>{setColor("rgb(96 165 250)")}} className='bg-blue-400 rounded-xl p-1'>
            Blue
          </button>
          <button onClick={()=>{setColor("rgb(52 211 153)")}} className='bg-emerald-400 rounded-xl p-1'>
            Light Green
          </button>
          <button onClick={()=>{setColor("rgb(168 85 247)")}} className='bg-purple-500 rounded-xl p-1'>
            Purple
          </button>
          <button onClick={()=>{setColor("rgb(234 179 8)")}} className='bg-yellow-500 rounded-xl p-1'>
            Yellow
          </button>
          <button onClick={()=>{setColor("Red")}} className='bg-red-600 rounded-xl p-1'>
            Red
          </button>
          <button onClick={()=>{setColor("rgb(96 165 250)")}} className='bg-blue-400 rounded-xl p-1'>
            Blue
          </button>
          <button onClick={()=>{setColor("rgb(52 211 153)")}} className='bg-emerald-400 rounded-xl p-1'>
            Light Green
          </button>
          <button onClick={()=>{setColor("rgb(168 85 247)")}} className='bg-purple-500 rounded-xl p-1'>
            Purple
          </button>
          <button onClick={()=>{setColor("rgb(234 179 8)")}} className='bg-yellow-500 rounded-xl p-1'>
            Yellow
          </button>
        </div>
      </div>
    </>
  )
}

export default App
