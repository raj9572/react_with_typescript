import React from 'react'
import { useCounter } from '../provider/Counter'


interface MyCounterProps{
    text:string
}


const MyCounter:React.FC<MyCounterProps> = (props) => {

 const context = useCounter()

  return (
     <>
     <h1>{context?.value}</h1>
     <button onClick={()=>context?.setCount(context?.value + 1)} className='btn'>{props.text}</button>
     </>
  )

}

export default MyCounter
