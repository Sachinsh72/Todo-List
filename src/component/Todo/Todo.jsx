import { useState } from "react";

function Todo({todoData, isFinished, id}){

    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setEditting] = useState(false);
    const [editText, setEditText] = useState(todoData)
    return(
        <div>
            <input type="checkbox" checked={finished}/>
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Todo;