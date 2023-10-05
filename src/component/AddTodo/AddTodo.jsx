import { useState } from "react";

function AddTodo({updateList}){

    const [inputText, setINputText] = useState('');

    return(
        <div>
            <input 
            type="text"
            value={inputText}
            placeholder="add your next todo.." 
            onChange={e=>setINputText(e.target.value)}
            />
            <button onClick={()=> { 
                updateList(inputText)
                setINputText('')
                
            }}>Add</button>
        </div>
    )
}

export default AddTodo;