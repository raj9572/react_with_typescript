import React, { useState,useEffect } from 'react'

const Counter:React.FC = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(()=>{
        return function(){
            console.log("unmounted counter")
        }
    },[])

    const handleIncrement = () =>{
        setCount(count+1)
    }
    const handleDecrement = () =>{
        if(count === 0) return
        setCount(count-1)
    }
  return (
    <div className='Counter'>
       <h1>{count}</h1>
    <button className='btn' onClick={handleIncrement}>increment</button>
    <button className='btn' onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default Counter
