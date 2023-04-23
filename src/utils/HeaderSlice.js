import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name:"Header",
    initialState:{
        show:true,
    },
    reducers:{
        hideHeader: (state)=>{
            state.show = false;
        },
        showHeader: (state)=>{
            state.show = true;
        },
        sidebar: (state)=>{
            state.show = !state.show;
        }
        
    }
});

export const {showHeader,hideHeader,sidebar} = HeaderSlice.actions
export default HeaderSlice.reducer;
