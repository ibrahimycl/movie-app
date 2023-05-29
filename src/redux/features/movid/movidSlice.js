import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    ids : [],
    loading: false,
}

export const movidSlice = createSlice({
    name:"movid",
    initialState,
    reducers: {
        setId: (state,action) =>{
            state.ids = action.payload;
          },
        addId: (state,action) =>{
          state.ids = [...state.id,action.payload];
        },
        setLoading: (state, action) => {
          state.loading = action.payload; 
        },
      },
    })
    
    export const {setId,addId,setLoading} = movidSlice.actions;
    
    export default movidSlice.reducer;