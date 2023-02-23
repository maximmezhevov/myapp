import { createSlice } from "@reduxjs/toolkit";

export const todoSlice2 = createSlice({
  name: 'todosRT2',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: action.payload.id,
        text: action.payload.todoValue,
        completed: false
      })
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload.id)
      toggleTodo.completed = !toggleTodo.completed
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    }
  }
})

export const { addTodo, toggleCompletedTodo, removeTodo } = todoSlice2.actions
export default todoSlice2.reducer