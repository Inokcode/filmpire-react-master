import {
  AccountCircle,
  Brightness1,
  Brightness4,
  Brightness7,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IconButtonCustomized, ToolbarCustomized } from "./navbarStyles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isAuthenticated = true;
  return (
    <>
      Navbar
      <AppBar position="fixed">
        <ToolbarCustomized>
          {isMobile && (
            <IconButtonCustomized
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
            >
              <Menu />
            </IconButtonCustomized>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search..."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </ToolbarCustomized>
      </AppBar>
      {/* Sidebar */}
      <div>
        <nav></nav>
      </div>
    </>
  );
};
export default Navbar;
