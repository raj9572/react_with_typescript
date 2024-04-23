import React, { HtmlHTMLAttributes, useState } from 'react'



interface MyButtonProps {
    text: string | number | boolean;
    onClick?: () => void;
    something?: boolean
}

// type props = {
//     text:string
// }


interface Book {
    name: string,
    price: number
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const { text } = props
    

    const [value, setValue] = useState<Book>({
        name: "one",
        price: 100
    })

    const [name, setName] = useState<string | undefined>('')


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
         e.preventDefault()

    }

    return (
        <div>
            <h3> Name {value.name}  Rs. {value.price}</h3>
            <button onClick={() => setValue({ name: "Two", price: 20 })} className='btn'>my button {text}</button>

            <h1>{name}</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} type='text' placeholder='Enter your name' />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default MyButton
