import { useState } from "react";
import Todo from "../Todo/Todo";

function TodoList({list, updateList}){

    return(
        <div>
            {list.length > 0 &&
                list.map(todo => <Todo 
                                key={todo.id} 
                                id={todo.id} 
                                isFinished={todo.finished} 
                                todoData={todo.todoData}
                                changeFinished={(isFinished) =>{
                                    console.log(isFinished);
                                    const updatedList = list.map(t => {
                                        if(t.id ==todo.id){
                                            todo.Finished = isFinished;
                                        }
                                        return t;
                                    });
                                    updateList(updatedList);
                                }}
                            />
                        )
            }
        </div>
    )
}

export default TodoList;

26
