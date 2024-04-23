import React, { useEffect, useState } from 'react';
import './App.css';
import Block from './components/Block';
import axios from 'axios';
// import Todo from './components/Todo';
// import Counter from './components/Counter';


// const todoItems = [
//   {
//     _id:1,
//     title:"i need to finish my hw"
//   },
//   {
//     _id:2,
//     title:"i need to watch raj ali video"
//   },
//   {
//     _id:3,
//     title:"i have to go to market"
//   },
// ]


interface TodoItems{
  id:number,
  title:string,
  userId:number,
  completed:boolean
}




function App(){
  const [todos , setTodos] = useState<TodoItems[]>([])

  const [value, setValue] = useState(Array(9).fill(null))
  const [currentValue, setCurrentValue ] = useState("X")


  // useEffect(()=>{
  //    fetch("https://jsonplaceholder.typicode.com/todos")
  //    .then(res => res.json())
  //    .then(todo => setTodos(todo as TodoItems[]))
  // },[])

  useEffect(()=>{
     axios.get<TodoItems[]>("https://jsonplaceholder.typicode.com/todos")
     .then((response) => setTodos(response.data))
     
  },[])


  function checkWinner(value:any[]){
    const win = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6],
    
    ]
 
    for(let i = 0; i<win.length ; i++){
     const [a,b,c] = win[i]
     if(value[a] !== null &&value[a] === value[b] && value[a] === value[c] ) return true
    }

    return false
 }







const handleBlockClick = (index:number) =>{
   const valueCopy = Array.from(value)
   if(valueCopy[index] !== null) return
   valueCopy[index] = currentValue


   // check who is win 
   const win = checkWinner(valueCopy)
   
   if(win){
     alert(`${currentValue} won the game`)
    }
    setCurrentValue(currentValue === "X" ? "O" : "X")
    setValue(valueCopy)
}

  return (
      // <div className='App_view'>
      //   <Todo items={todoItems}/>
      //   <Counter/>
      //   <Counter/>
      //   <Counter/>
      // </div>
      <div className='board'>
        <div className='row'>
         <Block onClick={() => handleBlockClick(0)}   value={value[0]} />
         <Block onClick={() => handleBlockClick(1)} value={value[1]} />
         <Block onClick={() => handleBlockClick(2)} value={value[2]}/>

        </div>

        <div className='row'>
         <Block onClick={() => handleBlockClick(3)} value={value[3]}/>
         <Block onClick={() => handleBlockClick(4)} value={value[4]}/>
         <Block onClick={() => handleBlockClick(5)} value={value[5]}/>

        </div>

        <div className='row'>
         <Block onClick={() => handleBlockClick(6)} value={value[6]}/>
         <Block onClick={() => handleBlockClick(7)} value={value[7]}/>
         <Block onClick={() => handleBlockClick(8)} value={value[8]}/>

        </div>


        {
          todos.map(todo => (
            <div key={todo.id}>
            <li>{todo.title}</li>
            </div>
          ))
        }
      </div>
  );
}

export default App;
