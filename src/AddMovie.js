import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      ratting: rating,
      summary: summary,
      trailer: trailer,
    };

    // setMovieList([...movieList, newMovie]);

    fetch(`https://62bad83b7bdbe01d52918a8a.mockapi.io/movielist`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate("/movies"));
    console.log(newMovie);
  };

  return (
    <div className="add-movie-form">
      <TextField
        label="Name"
        variant="standard"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Poster"
        variant="standard"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        label="Rating"
        variant="standard"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        label="Summary"
        variant="standard"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        label="Trailer"
        variant="standard"
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button onClick={addMovie} variant="outlined">
        Add Movie
      </Button>
    </div>
  );
}
