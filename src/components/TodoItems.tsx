import React from 'react'


interface TodoItemsProps{
    title:string
}


const TodoItems:React.FC<TodoItemsProps> = (props) => {
  return (
    <div className='todoItems' >
        {props.title}
    </div>
  )
}

export default TodoItems
