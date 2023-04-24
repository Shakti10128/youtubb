import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
    name:"Header",
    initialState:{
        show:false,
        suggestion:false,
        recent:false,
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
        },
        setSuggestionTrue:(state)=>{
            state.suggestion = true;
        },
        setSuggestionFalse:(state)=>{
            state.suggestion = false;
        },
        setShowRecentSearchTrue:(state)=>{
            state.recent = true;
        },
        setShowRecentSearchFalse:(state)=>{
            state.recent = false;
        }
        
    }
});

export const {showHeader,hideHeader,sidebar,setSuggestionTrue,setSuggestionFalse,setShowRecentSearchTrue,setShowRecentSearchFalse} = HeaderSlice.actions
export default HeaderSlice.reducer;
