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
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {
  DrawerCustomized,
  DrawerPaperCustomized,
  IconButtonCustomized,
  ToolbarCustomized,
} from "./navbarStyles";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
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
                sx={{
                  "&:hover": {
                    color: "white !important",
                    textDecoration: "none",
                  },
                }}
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
        <DrawerCustomized>
          {isMobile ? (
            <DrawerPaperCustomized
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </DrawerPaperCustomized>
          ) : (
            <DrawerPaperCustomized variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </DrawerPaperCustomized>
          )}
        </DrawerCustomized>
      </div>
    </>
  );
};
export default Navbar;
