import { ArrowBack } from "@mui/icons-material";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetActorsDetailsQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";

const Actors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = 1;
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });
  //
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary"
        >
          Go back
        </Button>
      </Box>
    );
  }
  //
  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <img
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            style={{ width: "200px" }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h2">{data?.name}</Typography>
          <Typography variant="h5">
            Born:{new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1">
            {data?.biography || "Sorry,no biography yet ..."}
          </Typography>
          <Box display="flex">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Typography>Movies</Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
      </Box>
    </>
  );
};
export default Actors;
