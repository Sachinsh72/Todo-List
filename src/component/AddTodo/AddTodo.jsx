import { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo(){

    const [inputText, setINputText] = useState('');
    const{dispatch} = useContext(TodoDispatchContext)

    return(
        <div>
            <input 
            type="text"
            value={inputText}
            placeholder="add your next todo.." 
            onChange={e=>setINputText(e.target.value)}
            />
            <button onClick={()=> { 
                dispatch({type: 'add_todo', payload: {todoText: inputText}})
                setINputText('')
                
            }}>Add</button>
        </div>
    )
}

export default AddTodo;