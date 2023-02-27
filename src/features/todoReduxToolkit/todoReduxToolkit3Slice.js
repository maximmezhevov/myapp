import { createSlice } from "@reduxjs/toolkit";

export const todoReduxToolkit3Slice = createSlice({
  name: 'todoReduxToolkit3',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: action.payload.id,
        text: action.payload.todoValue,
        completed: action.payload.completed
      })
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload)
      toggleTodo.completed = !toggleTodo.completed
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    removeAllTodo: (state) => {
      state.todos = []
    },
    removeCompletedTodo: (state) => {
      state.todos = state.todos.filter(todo => todo.completed !== true)
    },

  }
})

export const { addTodo, toggleCompletedTodo, removeTodo, removeAllTodo, removeCompletedTodo } = todoReduxToolkit3Slice.actions
export default todoReduxToolkit3Slice.reducer