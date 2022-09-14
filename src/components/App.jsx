import "../App.css";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Actors, MovieInformation, Movies, Navbar, Profile } from "./";
import { Box } from "@mui/system";

const App = () => (
  <Box sx={{ display: "flex", height: "100%" }}>
    <CssBaseline />
    <Navbar />

    <Box sx={{ height: "200px" }}>
      <Box sx={{ flexGrow: "1", padding: "2em" }} />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="movie/:id" element={<MovieInformation />} />
        <Route path="actors/:id" element={<Actors />} />
        <Route path="profile/:id" element={<Profile />} />
      </Routes>
    </Box>
  </Box>
);
export default App;
