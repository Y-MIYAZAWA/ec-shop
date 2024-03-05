import { configureStore, createSlice } from '@reduxjs/toolkit'




const initialState = {
  isAdminLogin: false
}

const adminLoginSlice = createSlice({
  name: "adminLoginRed",
  initialState: initialState,
  reducers:{
    adminLogin(state){
      state.isAdminLogin = true
    },
    adminLogout(state){
      state.isAdminLogin = false
    }
  }
})


export const store = configureStore({
  reducer: adminLoginSlice.reducer,
});

export const adminLoginAction = adminLoginSlice.actions;

