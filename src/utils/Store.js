import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./HeaderSlice";
import QuerySlice from "./QuerySlice";
import SearchSuggestionSlice from "./SearchSuggestionSlice";

const Store = configureStore({
    reducer:{
        Header:HeaderSlice,
        querySlice:QuerySlice,
        searchSuggestion:SearchSuggestionSlice
    }
});

export default Store;