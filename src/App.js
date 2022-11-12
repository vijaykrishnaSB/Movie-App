import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import { Home } from "./Home";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { TicTacToe } from "./TicTacToe";
import { EditMovie } from "./EditMovie";

function App() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ minHeight: "100vh", borderRadius: "0px" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movie
              </Button>
              <Button color="inherit" onClick={() => navigate("/tic-tac-toe")}>
                Tic-Tac-Toe
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                color="inherit"
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"}
              </Button>
            </Toolbar>
          </AppBar>
          <section className="route-container">
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/tic-tac-toe" element={<TicTacToe />} />
              <Route path="/" element={<MovieList />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
            </Routes>
          </section>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
