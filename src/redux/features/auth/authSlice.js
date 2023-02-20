import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    user: null,
    token: null,
    status: 'idle',
    error: null
}

export const login = createAsyncThunk('login',async(credential)=>{

    const {data} = await axios.post(`http://localhost:85/toolkit-project/backend/connect.php`,credential)
    console.log(data);
    return data;

})

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        logout: (state) => {
          state.user = null
          state.token = null
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(login.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.user = action.payload.user
            state.token = action.payload.token
            localStorage.setItem('token', action.payload.token);
          })
          .addCase(login.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
    })
    
    export const selectUser = (state) => state.auth.user
    export const selectToken = (state) => state.auth.token
    
    export default authSlice.reducer;