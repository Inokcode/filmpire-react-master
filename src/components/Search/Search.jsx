import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../../features/currentGenreOrCategorySlice";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(query);
      dispatch(searchMovie(query));
    }
  };
  return (
    <div>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
      />
    </div>
  );
};
export default Search;
