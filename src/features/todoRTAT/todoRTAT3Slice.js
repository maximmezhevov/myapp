import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  'todoRTAT3/fetchTodos',
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=4&_limit=3')

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
  'todoRTAT3/deleteTodo',
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
  'todoRTAT3/toggleStatus',
  async function(id, {rejectWithValue, dispatch, getState}) {
    const todo = getState().todoRTAT3.todos.find(todo => todo.id === id)


    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
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

export const getTodos = createAsyncThunk(
  'todoRTAT3/getTodos',
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=4&_limit=3')

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

export const addNewdTodo = createAsyncThunk(
  'todoRTAT3/addNewdTodo',
  async function(todoValue, {rejectWithValue, dispatch, getState}) {
    try {
      const todo = {
        userId: 1,
        title: todoValue,
        completed: false
      }

      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(todo)
      })

      if (!response.ok) {
        throw new Error('Can\'t add todo. Server Error!')
      }

      const data = await response.json()
      console.log(data)

      if (!getState().todoRTAT3.todos.some(todo => todo.id == '201')) {
        dispatch(addTodo(data))
      }

    } catch (error) {
      return rejectWithValue(error.message)
    }

  }
)

const setError = (state, action) => {
  state.interactionStatus = 'rejected'
  state.interactionError = action.payload
}

export const todoRTAT3Slice = createSlice({
  name: 'todoRTAT3',
  initialState: {
    todos: [],
    fetchStatus: null,
    fetchError: null,
    interactionStatus: null,
    interactionError: null,
  },
  reducers: {
    // addTodo: (state, action) => {
    //   state.todos.unshift({
    //     id: action.payload.id,
    //     title: action.payload.todoValue,
    //     completed: action.payload.completed
    //   })
    addTodo: (state, action) => {
      state.todos.unshift(action.payload)

      // BAD practice
      // state.todos = [
      //   {
      //     id: action.payload.id,
      //     title: action.payload.todoValue,
      //     completed: action.payload.completed
      //   },
      //   ...state.todos
      // ]
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload.id)
      toggleTodo.completed = !toggleTodo.completed

      // GOOD practice
      // const toggleTodo = state.todos.find((todo) => todo.id === action.payload.id)
      // if (!toggleTodo) { 
      //   return
      // }
      // toggleTodo.completed = !toggleTodo.completed

      // BAD practice
      // const newTodos = state.todos.map(todo => {
      //   if (todo.id !== action.payload.id) {
      //     return todo
      //   }
      //   return { ...todo, completed: !todo.completed}
      // })
      // return { ...state, todos: newTodos }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
      
      // GOOD practice
      // const i = state.todos.findIndex(todo => todo.id === action.payload.id)
      // if (i === -1) {
      //   return
      // }
      // state.todos.splice(i, 1)
      
      // BAD practice
      // const newTodos = state.todos.filter(todo => todo.id !== action.payload.id)
      // return { ...state, todos: newTodos}
    },
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
      .addCase(getTodos.pending, (state) => {
        state.fetchStatus = 'pending'
        state.fetchError = null
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.fetchStatus = 'fulfilled'
        state.todos = action.payload
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.fetchStatus = 'rejected';
        state.fetchError = action.payload
      })
      .addCase(deleteTodo.rejected, setError)
      .addCase(toggleStatus.rejected, setError)
      .addCase(addNewdTodo.rejected, setError)
  },
})

export const { addTodo, toggleCompletedTodo, removeTodo, setTodos} = todoRTAT3Slice.actions
export default todoRTAT3Slice.reducer
