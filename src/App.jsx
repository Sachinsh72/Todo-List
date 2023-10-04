
import { useState } from 'react';
import './App.css'
import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList';

function App() {

  const [list, setList] = useState([
    {id:1, todoData: 'todo 1', finished: false},
    {id:2, todoData: 'todo 2', finished: false},
]);

  return (
    <>
      <AddTodo updateList={(todo) => setList([...list, {id:list.length + 1, todoData: todo, finished: false}])}/>
      <TodoList list={list} updateList={setList}/>
    </>
  )
}

export default App
