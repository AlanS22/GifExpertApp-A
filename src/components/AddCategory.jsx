import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // onAddCategory([...categories,inputValue])
        onNewCategory(inputValue.trim());
        setInputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event )} action="">
            <input 
            type="text" 
            placeholder="Buscar gifs"  
            value={inputValue}
            onChange={(event) => onInputChange(event)}
            />
        </form>
    )

}