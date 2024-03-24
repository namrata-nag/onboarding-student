import "./styles.css";
import ResponsiveAppBar from "./components/navbar";
import Profile from "./components/profile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import MediaControlCard from "./components/resources";
import ProfilePage from "./components/profilePage";
import Checklist from "./components/checkBox";
import Resources from "./components/resources";
import DenseTable from "./components/schedule";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Box
        className="App"
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Box>
          {/* <MediaControlCard /> */}
          <ResponsiveAppBar></ResponsiveAppBar>
        </Box>
        <Routes>
          <Route exact path="/" element={<ProfilePage />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/schedule" element={<DenseTable />} />
          <Route path="/resource" element={<Resources />} />
        </Routes>
      </Box>
    </Router>
  );
  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    ></Box>
  );
}
