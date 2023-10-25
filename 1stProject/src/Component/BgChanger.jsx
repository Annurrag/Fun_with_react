import React, { useState } from 'react'

const BgChanger = () => {
  const[color, setColor]=useState("olive")
  return (
    <>
    <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='otline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='otline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='otline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
          <button className='otline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Black"}} onClick={()=>setColor("black")}>Black</button>
          <button className='otline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
        </div>

      </div>
    </div>
    </>
  )
}

export default BgChanger
