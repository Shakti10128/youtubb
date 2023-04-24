import { createSlice } from "@reduxjs/toolkit";

const checkLength = (state) => {
  if (state.recentQuery.length > 10) {
    state.recentQuery.pop();
  }
};

// const checkInclude = (recentQuery,value)=>{
//     recentQuery = recentQuery.filter((data)=>{
//         return data !=value
//     })
// }

const QuerySlice = createSlice({
  name: "querySlice",
  initialState: {
    recentQuery: ["iphone"],
  },
  reducers: {
    setQuery: (state, action) => {
      if (state.recentQuery.length > 9) {
        checkLength(state);
      }
      state.recentQuery = [...new Set(state.recentQuery)]
        state.recentQuery.unshift(action.payload);
    },
    getQuery: (state) => {
      return state.recentQuery;
    },
  },
});

export const { setQuery, getQuery } = QuerySlice.actions;
export default QuerySlice.reducer;
