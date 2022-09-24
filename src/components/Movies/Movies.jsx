import { CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList, Pagination } from "../index";

const Movies = () => {
  const [page, setPage] = useState(1);
  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));
  //
  const numberOfMovies = lg ? 16 : 18;
  //
  const { genreOrCategoryName, searchQuery } = useSelector(
    (state) => state.genreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreOrCategoryName,
    page,
    searchQuery,
  });
  console.log(data);
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems={center} mt="20px">
        <Typography variant="h4">
          No movies that match that name
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }
  if (error) {
    return "An error has occured";
  }
  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.totalPages}
      />
    </div>
  );
};
export default Movies;
