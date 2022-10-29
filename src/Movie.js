import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
// import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";

export function Movie({ movie, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);

  const paraStyles = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();

  return (
    <Card
      className="movie-container"
      style={{ height: "min-content", borderRadius: "10px" }}
    >
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}{" "}
            <IconButton
              color="primary"
              onClick={() => navigate(`/movies/${id}`)}
              aria-label="Movie details"
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Movie details"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>

        {/* <button onClick={() => setShow(!show)}>Summary</button> */}

        {/* <button onClick={() => navigate(`/movies/${id}`)}>Info</button> */}

        {/* //// { conditional styling} */}
        {/* <p style={paraStyles } className="movie-summary">{movie.summary}</p> */}

        {/* {conditional rendering}//// most used */}
        {show ? <p classNMae="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
        {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
