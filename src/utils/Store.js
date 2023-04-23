import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "./HeaderSlice";

const Store = configureStore({
    reducer:{
        Header:HeaderSlice
    }
});

export default Store;