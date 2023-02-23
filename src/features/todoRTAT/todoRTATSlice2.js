import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos2 = createAsyncThunk(
  'todoRTATSlice/fetchTodos2',
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')

      if (!response.ok) {
        throw new Error('Server Error!')
      }
  
      const data = await response.json()
      return data

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const todoRTATSlice2 = createSlice({
  name: 'todoRTATSlice2',
  initialState: {
    todos: [],
    status: null,
    error: null
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: action.payload.id,
        title: action.payload.todoValue,
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
  },
  extraReducers: {
    [fetchTodos2.pending]: (state) => {
      state.status = 'pending'
      state.error = null
    },
    [fetchTodos2.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.todos = action.payload 
    },
    [fetchTodos2.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export const { addTodo, toggleCompletedTodo, removeTodo } = todoRTATSlice2.actions
export default todoRTATSlice2.reducer