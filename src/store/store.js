import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import todoSlice1 from '../features/todoReduxToolkit/todoSlice1'
import postSlice from '../features/post/postSlice'
import todoSlice2 from '../features/todoReduxToolkit/todoSlice2'
import todoRTATSlice from '../features/todoRTAT/todoRTATSlice'
import todoRTATSlice2 from '../features/todoRTAT/todoRTATSlice2'

export const store = configureStore({
  reducer: {
    user: userSlice,
    todoRT1: todoSlice1,
    post: postSlice,
    todoRT2: todoSlice2,
    todoRTAT: todoRTATSlice,
    todoRTAT2: todoRTATSlice2
  }
})