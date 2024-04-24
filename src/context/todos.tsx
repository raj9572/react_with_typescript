import { createContext, useContext, useState } from "react";

export type TodosProviderProps = {
    children : React.ReactNode
}

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date
}

export type TodosContextValue = {
    todos : Todo[];
    handleAddToDo : (task:string)=>void;
    toggleTodoAsCompleted:(id:string) => void;
    handleDeleteTodo : (id:string) => void

}

export const todosContext = createContext<TodosContextValue | null>(null)





export const TodosProvider = ({children}:TodosProviderProps) =>{
 const [todos, setTodos] = useState<Todo[]>(()=>{
    try {
          const newTodos = localStorage.getItem("todos") || "[]"
          
          return JSON.parse(newTodos) 
    } catch (error) {
        console.log('error',error)
    }
 })



    const handleAddToDo = (task:string) =>{
        setTodos((prev) => {
            const newTodos:Todo[] =[
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt: new Date()

                },
                ...prev
            ] 

            localStorage.setItem("todos",JSON.stringify(newTodos))

            return newTodos
        })
    }


    const toggleTodoAsCompleted = (id:string)=>{
        setTodos((prev)=>{
            let newTodos = prev.map(todo => {
                if(todo.id === id){
                    return {...todo,completed:!todo.completed}
                }
                return todo
            })
            localStorage.setItem("todos",JSON.stringify(newTodos))
            return newTodos
        })
    }


    const handleDeleteTodo = (id:string)=>{
        setTodos(prev => {
             let newTodos = prev.filter(item => item.id !== id)
             localStorage.setItem("todos",JSON.stringify(newTodos))
             return newTodos
        })
    }

    return(
        <todosContext.Provider value={{todos, handleAddToDo,toggleTodoAsCompleted,handleDeleteTodo}}>
          {children}
        </todosContext.Provider>
    )
}




export const useTodos = () =>{
    const todosConsumer = useContext(todosContext)


    if (!todosConsumer) {
        throw new Error("useTodos user outside of provider")
    }

    return todosConsumer

}