import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    user: JSON.parse(localStorage.getItem('user')) ?? false
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login: (state,action) =>{
          localStorage.setItem('user',JSON.stringify(action.payload));
          state.user = action.payload;
        },
        logout: (state,action) => {
          localStorage.removeItem('user');
          state.user = false;
          
        },
      },
    })
    
    export const {login,logout} = authSlice.actions;
    
    export default authSlice.reducer;