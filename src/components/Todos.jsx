import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../fetures/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);
  return (
    <>
      <div>
        <h1 className=" text-[24px] font-bold font-sans">Todos</h1>
        <ul className=" list-none flex flex-col justify-center items-center">
          {/* show todo  */}
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-1/2"
            >
              <div className="text-white">{todo.text}</div>
              {/*  */}

              <button onClick={() => dispatch(removeTodo(todo.id))}>
                {/* image background round and center  */}
                <div className="h-6 w-6 bg-white flex items-center justify-center rounded-[50%]">
                  <img
                    src="./images/delete.png"
                    alt="delete-icon"
                    className="h-4 w-4"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
