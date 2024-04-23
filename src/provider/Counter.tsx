import { createContext,useState,useContext } from "react";

interface CounterProviderProps{
    children:React.ReactNode
}


interface counterContextValue{
    value:number;
    setCount:(num:number)=>void
}


const counterContext = createContext<counterContextValue | null>(null)

export const useCounter = () =>{
    return useContext(counterContext)
}


const CounterProvider:React.FC<CounterProviderProps> = (props) =>{

 const [count, setCount] = useState<number>(0)


    return(
        <counterContext.Provider value={{
            value:count,
            setCount
        }}>
            {props.children}
        </counterContext.Provider>
    )
}


export default CounterProvider