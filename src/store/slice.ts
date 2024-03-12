import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAdminLogin: false
}

export const adminLoginSlice = createSlice({
  name: "adminLoginRed",
  initialState,
  reducers:{
    adminLogin(state){
      state.isAdminLogin = true
    },
    adminLogout(state){
      state.isAdminLogin = false
    }
  }
})

export const adminLoginAction = adminLoginSlice.actions;

