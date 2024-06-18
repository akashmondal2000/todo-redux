import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../fetures/todo/todoSlice';


const Todos = () => {

  const todos = useSelector( state=> state.todos );

  console.log(todos)
  return (
    <div>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}> {todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos