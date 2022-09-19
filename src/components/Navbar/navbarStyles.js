// import { styled } from "@mui/styles";

import { IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

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
