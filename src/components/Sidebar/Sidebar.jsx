import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
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
  //

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
        {demoCategories.map(({ label, value }) => (
          <Link
            key={value}
            to="/"
            sx={{ color: theme.palette.text.primary, textDecoration: "none" }}
          >
            <ListItem onClick={() => {}} button>
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
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link
            key={value}
            to="/"
            sx={{ color: theme.palette.text.primary, textDecoration: "none" }}
          >
            <ListItem onClick={() => {}} button>
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
    </>
  );
};
export default Sidebar;
