import { createSlice } from "@reduxjs/toolkit";

export const currentGenreOrCategorySlice = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      // console.log(action.payload);
      state.genreOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = currentGenreOrCategorySlice.actions;
export default currentGenreOrCategorySlice.reducer;
