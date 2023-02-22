import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, {/*rejectWithValue, */ dispatch }) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    dispatch (setPosts(response.data))
  }
)
export const deletePostById = createAsyncThunk(
  'posts/deletePostById',
  async (id, {/*rejectWithValue, */ dispatch}) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch (deletePost(id))
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    }
  },
  // extraReducers: { // The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice !!!
  //   [getPosts.pending]: () => console.log('getPosts: pending'),
  //   [getPosts.fulfilled]: () => console.log('getPosts: fulfilled'),
  //   [getPosts.rejected]: () => console.log('getPosts: rejected'),
  //   [deletePostById.pending]: () => console.log('deletePostById: pending'),
  //   [deletePostById.fulfilled]: () => console.log('deletePostById: fulfilled'),
  //   [deletePostById.rejected]: () => console.log('deletePostById: rejected')
  // }
})

export const { setPosts, deletePost } = postSlice.actions
export default postSlice.reducer