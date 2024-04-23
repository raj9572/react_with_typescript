import React from 'react'
import TodoItems from './TodoItems'


interface todoItem {
  _id: number,
  title: string
}

interface TodoProps {
  items: todoItem[]
}

const Todo: React.FC<TodoProps> = (props) => {

  return (
    <div className='Todo'>
      <ol>
        {
          props.items.map(item => <TodoItems key={item._id} title={item.title} />)
        }
      </ol>

    </div>
  )
}

export default Todo
