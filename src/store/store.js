import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import todoSlice from '../features/todoReduxToolkit1/todoSlice'
import postSlice from '../features/post/postSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    post: postSlice
  }
})