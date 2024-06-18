import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1 , text: "hellow Bhai" }]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo : (state, action)=>{},
        removeTodo : (state,action)=>{} 
    },
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer