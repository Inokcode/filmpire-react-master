import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategorySlice";
import { useGetGenresQuery } from "../../services/TMDB";
import { sxImage, sxLink } from "./SidebarStyles";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcomming", value: "upcoming" },
];

const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];

const redLogo = "RED";
const blueLogo = "Blue";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const { data, isFetching, error } = useGetGenresQuery();
  // console.log(data);
  const dispatch = useDispatch();
  const { genreOrCategoryName } = useSelector((state) => state.genreOrCategory);
  //
  // console.log(genreOrCategoryName);

  //
  return (
    <>
      <Link to="/" sx={sxLink}>
        <img
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Filmpire logo"
          sx={sxImage}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link
            key={value}
            to="/"
            sx={{ color: theme.palette.text.primary, textDecoration: "none" }}
          >
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemIcon>
                <img
                  src={redLogo}
                  height={30}
                  sx={{
                    filter:
                      theme.palette.mode === "dark" ? "dark" : "invert(1)",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link
              key={id}
              to="/"
              sx={{ color: theme.palette.text.primary, textDecoration: "none" }}
            >
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(id))}
                button
              >
                <ListItemIcon>
                  <img
                    src={redLogo}
                    height={30}
                    sx={{
                      filter:
                        theme.palette.mode === "dark" ? "dark" : "invert(1)",
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};
export default Sidebar;
