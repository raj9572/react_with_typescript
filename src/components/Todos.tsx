import React from 'react'
import { useTodos } from '../context/todos'
import { useSearchParams } from 'react-router-dom'
const Todos = () => {
    const { todos,toggleTodoAsCompleted,handleDeleteTodo } = useTodos()
    const [searchParams] = useSearchParams()

    let todosData = searchParams.get("todos")

    let filterDate = todos

    if (todosData === "active") {
        filterDate = filterDate.filter(task => !task.completed)
    }

    if (todosData === "completed") {
        filterDate = filterDate.filter(task => task.completed)
    }


    return (
        <div>
            {
                filterDate.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            id={`todo-${todo.id}`}
                            checked={todo.completed}
                            onChange={() => toggleTodoAsCompleted(todo.id)}
                        />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button type='button' onClick={()=>{handleDeleteTodo(todo.id)}} style={{margin:"10px"}}>Delete</button>
                            )
                        }
                    </li>
                ))
            }
        </div>
    )
}

export default Todos
