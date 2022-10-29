import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://635d01fffc2595be2650be41.mockapi.io/movies", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`https://635d01fffc2595be2650be41.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <IconButton
                style={{ marginLeft: "auto" }}
                color="error"
                onClick={() => deleteMovie(mv.id)}
                aria-label="Movie details"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                color="secondary"
                onClick={() => navigate(`/movies/edit/${mv.id}`)}
                aria-label="Movie details"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
