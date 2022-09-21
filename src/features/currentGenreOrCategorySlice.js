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
      state.searchQuery = "";
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } =
  currentGenreOrCategorySlice.actions;
export default currentGenreOrCategorySlice.reducer;
