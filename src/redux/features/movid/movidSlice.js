import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    id : []
}

export const movidSlice = createSlice({
    name:"movid",
    initialState,
    reducers: {
        setId: (state,action) =>{
            state.id = action.payload;
          },
        addId: (state,action) =>{
          state.id = [...state.id,action.payload];
        },
      },
    })
    
    export const {setId,addId} = movidSlice.actions;
    
    export default movidSlice.reducer;