import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../features/auth/types";
import { getUser } from "../features/users/api/getUser";
import { RootState } from "./store";



export const adminUserGet = createAsyncThunk("get/adminUser", async () => {
  const res = await getUser();
  return res;
})

export type AdminUserData = {
  data: User;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
}

const initialState: AdminUserData = {
  data: {id: 0,
    email: "",
    emailReissueToken: "",
    isAdmin: false,
    createdAt: "",
    updatedAt: "",
    createdBy: 0,
    updatedBy: 0,},
  status: "idle",
  error: undefined,
}

export const adminUserSlice = createSlice({
  name: "adminUserRed",
  initialState,
  reducers: {
    revertAll(state){
      return state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(adminUserGet.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(adminUserGet.fulfilled, (state, action) =>{
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(adminUserGet.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
  }
})

export const selectUser = (state: RootState) => state.adminUser;
export const adminUserAction = adminUserSlice.actions;