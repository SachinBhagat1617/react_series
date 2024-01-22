import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)
  // let obj1={
  //   ItemName:"xyz",
  //   price:200000
  // }
  // let newArr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-2 mb-4'>Talwind</h1>
      {/* <Card ItemName="Apple" someObje={obj1}/> */}
      {/* <Card ItemName="Apple" someObje={obj1} obj2={newArr}/> */}
      <Card ItemName="Apple" btnName="Details"/>
      <Card btnName="VisitMe"/>
    </>
  )
}

export default App
