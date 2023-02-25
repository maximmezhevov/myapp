import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  'todoRTATSlice2/fetchTodos',
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

export const deleteTodo = createAsyncThunk(
  'todoRTATSlice2/deleteTodo',
  async function(id, {rejectWithValue, dispatch}) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Can\'t delete todo. Server Error!')
      }

      dispatch(removeTodo({id}))

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const toggleStatus = createAsyncThunk(
  'todoRTATSlice2/toggleStatus',
  async function(id, {rejectWithValue, dispatch, getState}) {
    const todo = getState().todoRTAT2.todos.find(todo => todo.id === id)

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application.json'
        },
        body: JSON.stringify({
          completed: !todo.completed,
        })
      })

      if (!response.ok) {
        throw new Error('Can\'t toggle status. Server Error!')
      }

      // const data = await response.json()
      // console.log(data)
      dispatch(toggleCompletedTodo({id}))

    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
)

const setError = (state, action) => {
  state.interactionStatus = 'rejected'
  state.interactionError = action.payload
}

export const todoRTATSlice2 = createSlice({
  name: 'todoRTATSlice2',
  initialState: {
    todos: [],
    fetchStatus: null,
    fetchError: null,
    interactionStatus: null,
    interactionError: null
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.fetchStatus = 'pending'
        state.fetchError = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.fetchStatus = 'fulfilled'
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.fetchStatus = 'rejected';
        state.fetchError = action.payload
      })
      .addCase(deleteTodo.rejected, setError)
      .addCase(toggleStatus.rejected, setError)
  },
})

export const { addTodo, toggleCompletedTodo, removeTodo } = todoRTATSlice2.actions
export default todoRTATSlice2.reducer