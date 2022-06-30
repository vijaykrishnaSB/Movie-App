import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { AddColor } from "./AddColor";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { MovieList } from "./MovieList";
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Home } from "./Home";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { TicTacToe } from "./TicTacToe";
import { EditMovie } from "./EditMovie";


function App() {
  const INITIAL_MOVIE_LIST = [
    {
      id: "100",
      name: "Casino Royale",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      rating: 8,
      summary:
        "After earning 00 status and a licence to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro",
      trailer: "https://www.youtube.com/watch?v=36mnx8dBbGE",
    },

    {
      id: "101",
      name: "Rockstar",
      poster: "https://www.filmibeat.com/ph-big/2011/09/1315843438494705.jpg",
      rating: 7.8,
      summary:
        "Janardhan Jakhar chases his dreams of becoming a big Rock star, during which he falls in love with Heer.",
      trailer: "https://www.youtube.com/watch?v=bD5FShPZdpw",
    },

    {
      id: "102",
      name: "Agent Sai Srinivasa Athreya",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM2MmJkZmUtZWQ0Yi00YWZjLWIyNTItNDQ2YzAwNmI4YjlmXkEyXkFqcGdeQXVyODMxNjkyNzQ@._V1_.jpg",
      rating: 8.4,
      summary:
        "Agent Sai Srinivasa Athreya is an authentic humorous investigative thriller revolving around the adventures of a detective based out of Nellore.",
      trailer: "https://www.youtube.com/watch?v=iPfVbR5oAWE",
    },

    {
      id: "103",
      name: "Sherlock (TV Series)",
      poster:
        "https://i.pinimg.com/originals/ac/da/09/acda09df027c6cdc127505bf1516cdfa.jpg",
      rating: 9.1,
      summary:
        "A modern update finds the famous sleuth and his doctor partner solving crime in 21st-century London.",
      trailer: "https://www.youtube.com/watch?v=7hjPxUfV32Q",
    },

    {
      id: "104",
      name: "Mad Max: Fury Road",
      poster:
        "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      rating: 8.1,
      summary:
        "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    },

    {
      id: "105",
      name: "Athadu",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDU4MDQ3YWItY2ViMy00NTM5LTg0NjQtMWIxN2ExZmU0ZTE0XkEyXkFqcGdeQXVyMjMyNjkwMTY@._V1_.jpg",
      rating: 8.2,
      summary:
        "A gunman for hire is framed for murder, and assumes a dead man's identity while hiding from the police.",
      trailer: "https://www.youtube.com/watch?v=HpqfxXRhlgU",
    },

    {
      id: "106",
      name: "Avatar",
      poster:
        "https://media-cache.cinematerial.com/p/500x/kytw5i6k/avatar-movie-poster.jpg?v=1456737172",
      rating: 7.8,
      summary:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    },

    {
      id: "107",
      name: "Deedpool",
      poster:
        "https://media.karousell.com/media/photos/products/2019/09/01/deadpoolposter_1567300057_bf08e260.jpg",
      rating: 8,
      summary:
        "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      trailer: "https://www.youtube.com/watch?v=Xithigfg7dA",
    },

    {
      id: "108",
      name: "Kung Fu Panda",
      poster: "https://m.media-amazon.com/images/I/51xlf28jbiL.jpg",
      rating: 7.6,
      summary:
        "To everyone's surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be tested as the valley's arch-enemy is on his way.",
      trailer: "https://www.youtube.com/watch?v=PXi3Mv6KMzY",
    },

    {
      id: "109",
      name: "Uri: The Surgical Strike",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg",
      rating: 8.2,
      summary:
        "Indian army special forces execute a covert operation, avenging the killing of fellow army men at their base by a terrorist group.",
      trailer: "https://www.youtube.com/watch?v=6SSbCbudN3o",
    },

    {
      id: "110",
      name: "Hridayam",
      poster: "https://wallpaperaccess.com/full/7988317.jpg",
      rating: 8.1,
      summary:
        "The emotional journey of Arun, his carefree bachelor days in engineering college, and how he matures through various phases of life",
      trailer: "https://www.youtube.com/watch?v=C2FU7fj0IQc",
    },

    {
      id: "111",
      name: "Pirates of the Caribbean",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 8,
      summary:
        "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead",
      trailer: "https://www.youtube.com/watch?v=naQr0uTrH_s",
    },
  ];

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
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
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movie
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color Game
              </Button>
              <Button color="inherit" onClick={() => navigate("/tic-tac-toe")}>
                Tic-Tac-Toe
              </Button>
              <Button
                color="inherit"
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"}
                mode
              </Button>
            </Toolbar>
          </AppBar>

          {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav> */}
          <section className="route-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/color-game" element={<AddColor />} />
              <Route path="/tic-tac-toe" element={<TicTacToe />} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
            </Routes>
          </section>

          {/* <AddColor /> */}
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
