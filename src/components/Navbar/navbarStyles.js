// import { styled } from "@mui/styles";

import { Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;
export const ToolbarCustomized = styled(Toolbar)(({ theme }) => ({
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "240px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0",
    flexWrap: "wrap",
  },
}));

export const IconButtonCustomized = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const DrawerCustomized = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

export const DrawerPaperCustomized = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
}));
