import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1 , text: "hellow Bhai", completed:false }]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload,
                completed : true
            }
            state.todos.push(todo)
            console.log(todo);
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo : (state,action)=>{
            state.todos = state.todos.map((todo) => todo.id ? action.payload : todo)
        }

    },
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer