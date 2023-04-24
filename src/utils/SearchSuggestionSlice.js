import { createSlice } from "@reduxjs/toolkit";

const SearchSuggestionSlice = createSlice({
    name:"searchSuggestion",
    initialState:{
        isTrue:false,
        isWatch:false,
    },
    reducers:{
        hideSuggestionContainer: (state)=>{
            state.isTrue = false;
        },
        showSuggestionContainer: (state)=>{
            state.isTrue = true;
        },
        setWatchTrue:(state)=>{
            state.isWatch = true;
        },
        setWatchFalse:(state)=>{
            state.isWatch = false;
        }
        
    }
});

export const {hideSuggestionContainer,showSuggestionContainer,setWatchTrue,setWatchFalse} = SearchSuggestionSlice.actions
export default SearchSuggestionSlice.reducer;
