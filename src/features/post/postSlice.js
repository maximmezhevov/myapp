import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, {/*rejectWithValue, */ dispatch }) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    dispatch(setPosts(response.data))
  }
)

export const deletePostById = createAsyncThunk(
  'posts/deletePostById',
  async (id, {/*rejectWithValue, */ dispatch}) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch(deletePost(id))
  }
)

export const getPosts2 = createAsyncThunk(
  'posts/getPosts2',
  async function(_, {/*rejectWithValue ,*/ dispatch}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await response.json()
    return dispatch(setPosts2(data))
  }
)

export const deletePostById2 = createAsyncThunk(
  'posts/deletePostById2',
  async (id, {/*rejectWithValue, */ dispatch}) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return dispatch(deletePost2(id))
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
    error: null
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    },

    setPosts2: (state, action) => {
      state.posts = action.payload
    },
    deletePost2: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    },
  },
  // extraReducers: { // The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice !!!
  //   [getPosts.pending]: () => console.log('getPosts: pending'),
  //   [getPosts.fulfilled]: () => console.log('getPosts: fulfilled'),
  //   [getPosts.rejected]: () => console.log('getPosts: rejected'),
  //   [getPosts2.pending]: () => console.log('getPosts2: pending'),
  //   [getPosts2.fulfilled]: () => console.log('getPosts2: fulfilled'),
  //   [getPosts2.rejected]: () => console.log('getPosts2: rejected')
  // }

  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'pending'
        console.log('getPosts: pending')
      })
      .addCase(getPosts.fulfilled, (state) => {
        state.status = 'fulfilled'
        console.log('getPosts: fulfilled')
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = 'rejected'
        console.log('getPosts: rejected')
      })
      .addCase(getPosts2.pending, (state) => {
        state.status = 'pending'
        console.log('getPosts2: pending')
      })
      .addCase(getPosts2.fulfilled, (state) => {
        state.status = 'fulfilled'
        console.log('getPosts2: fulfilled')
      })
      .addCase(getPosts2.rejected, (state) => {
        state.status = 'rejected'
        console.log('getPosts2: rejected')
      })
  },
})

export const { setPosts, setPosts2, deletePost, deletePost2 } = postSlice.actions
export default postSlice.reducer