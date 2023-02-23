import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  'todoRTATSlice/fetchTodos',
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')

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

export const todoRTATSlice = createSlice({
  name: 'todoRTATSlice',
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
  // extraReducers: {
  //   [fetchTodos.pending]: (state) => {
  //     state.status = 'pending'
  //     state.error = null
  //   },
  //   [fetchTodos.fulfilled]: (state, action) => {
  //     state.status = 'fulfilled'
  //     state.todos = action.payload 
  //   },
  //   [fetchTodos.rejected]: (state, action) => {
  //     state.status = 'rejected'
  //     state.error = action.payload
  //   }
  // }
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'pending'
        state.error = null
        // console.log('addCase fetchTodos pending')
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.todos = action.payload 
        // console.log('addCase fetchTodos fulfilled')
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
        // console.log('addCase fetchTodos rejected')
      })
  },
})
  

export const { addTodo, toggleCompletedTodo, removeTodo } = todoRTATSlice.actions
export default todoRTATSlice.reducer