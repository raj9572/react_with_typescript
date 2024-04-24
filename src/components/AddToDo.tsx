import React, { useState } from 'react'
import { useTodos } from '../context/todos'



const AddToDo = () => {
    const [todo, setTodo] = useState("")
    const {handleAddToDo} = useTodos()

    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        handleAddToDo(todo)
        setTodo("")
    }

  return (
    <div>
     <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type='submit' >Add</button>
     </form>
    </div>
  )
}

export default AddToDo
