import {
  ArrowBack,
  Favorite,
  FavoriteBorderOutlined,
  Language,
  PlusOne,
  Remove,
  Theaters,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategorySlice";
import { useGetMovieQuery } from "../../services/TMDB";

const MovieInformation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  console.log(data);
  if (!isFetching) {
    <Box display="flex" justifyContent="center" mt={3}>
      <CircularProgress size="8rem" />
    </Box>;
  }
  if (error) {
    <Box display="flex" justifyContent="center">
      <Link to="/">Something has gone wrong</Link>
    </Box>;
  }

  const isMovieFavorited = true;
  const isMovieWatchlisted = false;

  const addToFavorites = () => {};
  const addToWatchlist = () => {};
  return (
    <Grid container>
      <Grid item sm={12}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
          style={{ width: "400px" }}
        />
      </Grid>
      <Grid item container direction="column">
        <Typography>
          {data?.title} ({data?.release_date.split("-")[0]})
        </Typography>
        <Typography>{data?.tagline}</Typography>
        <Grid item>
          <Box>
            <Rating readOnly value={data?.vote_average / 2} />
            <Typography>{data?.vote_average}/10</Typography>
          </Box>
          <Typography>
            {data?.runtime}min
            {data?.spoken_languages.length > 0
              ? ` / ${data?.spoken_languages[0].name}`
              : ""}
          </Typography>
        </Grid>
        <Grid>
          {data?.genres?.map((genre, image) => (
            <Link
              key={genre.name}
              to="/"
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              {genre.name}
            </Link>
          ))}
        </Grid>
        <Typography varient="h5">Overview </Typography>
        <Typography>{data?.overview}</Typography>
        <Typography>Top Cast</Typography>
        <Grid item container>
          {data &&
            data.credits?.cast
              ?.map(
                (character, i) =>
                  character.profile_path && (
                    <Grid
                      component={Link}
                      to={`/actors/${character.id}`}
                      xs={4}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        style={{ width: "100px" }}
                      />
                      <Typography>{character.name}/</Typography>
                      <Typography color="textSecondary">
                        {character.character.split("/")[0]}
                      </Typography>
                    </Grid>
                  )
              )
              .slice(0, 6)}
        </Grid>
        <Grid item container>
          <div>
            <Grid xs={4}>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data?.homepage}
                  endIcon={<Language />}
                >
                  Website
                </Button>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<Language />}
                >
                  IMDB
                </Button>
                <Button onClick={() => {}} href="#" endIcon={<Theaters />}>
                  Trailer
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid xs={3}>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  onClick={addToFavorites}
                  endIcon={
                    isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />
                  }
                >
                  {isMovieFavorited ? "unfavorite" : "Favorite"}
                </Button>
                <Button
                  onClick={addToFavorites}
                  endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
                >
                  Watchlist
                </Button>
                <Button endIcon={<ArrowBack />}>
                  <Typography component={Link} to="/">
                    BACK
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MovieInformation;
