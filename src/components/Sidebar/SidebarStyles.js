import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export const sxLink = {
  display: "flex",
  justifyContent: "center",
  padding: "10% 0",
};
export const sxImage = {
  width: "70%",
};

// export const LinkCustomized = styled(Link)(({ theme }) => ({
//   color: theme.palette.text.primary,
//   textDecoration: "none",
// }));

// const theme = useTheme();
// export const sxDrawer = {
//   [theme.breakpoints.up("sm")]: {
//     width: drawerWidth,
//   },
// };
// export const ToolbarCustomized = styled(Toolbar)(({ theme }) => ({
//   //   height: "80px",
//   //   display: "flex",
//   //   justifyContent: "space-between",
//   //   marginLeft: "240px",
//   //   [theme.breakpoints.down("sm")]: {
//   //     marginLeft: "0",
//   //     flexWrap: "wrap",
//   //   },
// }));
