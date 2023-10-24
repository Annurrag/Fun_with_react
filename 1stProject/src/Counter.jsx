import { useState } from 'react'
import './App.css'

function Counter() {
  const[count, setCount]=useState(0);
  
 const Subtract=()=>{
  if (count < 1){
    return;
  }
  else{
    setCount(count-1)
  }
 }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Add</button>
      <button onClick={(Subtract)}>Subtract</button>
    </>
  )
}

export default Counter