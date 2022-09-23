import { Grid } from "@mui/material";
import Movie from "../Movie/Movie";

const MovieList = ({ movies, numberOfMovies }) => {
  return (
    <Grid container>
      {movies.results.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};
export default MovieList;
