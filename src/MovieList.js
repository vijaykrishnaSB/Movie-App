import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "./Movie";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://62bad83b7bdbe01d52918a8a.mockapi.io/movielist", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`https://62bad83b7bdbe01d52918a8a.mockapi.io/movielist/${id}`, {
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
              <button onClick={() => deleteMovie(mv.id)}>Delete</button>
            }
            editButton={
              <button onClick={() => navigate(`/movies/edit/${mv.id}`)}>
                Edit
              </button>
            }
          />
        ))}
      </div>
    </div>
  );
}
