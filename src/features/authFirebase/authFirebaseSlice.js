import { createSlice } from "@reduxjs/toolkit"

const authFirebaseSlice = createSlice({
  name: 'authFirebase',
  initialState: {
    email: '',
    token: '',
    uid: '',
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.uid = action.payload.uid;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.uid = null;
    }
  }
})

export const {setUser, removeUser} = authFirebaseSlice.actions
export default authFirebaseSlice.reducer
