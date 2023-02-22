import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload) // push
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
      toggleTodo.completed = !toggleTodo.completed
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const { addTodo, toggleCompletedTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer