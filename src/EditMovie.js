import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";

export function EditMovie() {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState(null);

  const getMovie = () => {
    fetch(`https://62bad83b7bdbe01d52918a8a.mockapi.io/movielist/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(() => getMovie(), []);

  return movie ? <EditMovieForm movie={movie} /> : "Loading...";
}

function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const editMovie = () => {
    const updatedMovie = {
      name: name,
      poster: poster,
      ratting: rating,
      summary: summary,
      trailer: trailer,
    };

    // setMovieList([...movieList, updatedMovie]);

    fetch(`https://62bad83b7bdbe01d52918a8a.mockapi.io/movielist/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/movies"));
    console.log(updatedMovie);
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        label="Name"
        variant="standard"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={poster}
        label="Poster"
        variant="standard"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        label="Rating"
        variant="standard"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        label="Summary"
        variant="standard"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={trailer}
        label="Trailer"
        variant="standard"
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button onClick={editMovie} variant="outlined" color="success">
        Save
      </Button>
    </div>
  );
}
