import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(dislike + 1);

  return (
    <div className="counter-container">
      <IconButton
        color="primary"
        onClick={incrementLike}
        aria-label="Movie details"
      >
      <Badge badgeContent={like} color="primary">
        👍
      </Badge>
      </IconButton>

      <IconButton
        color="error"
        onClick={incrementDisLike}
        aria-label="Movie details"
      >
      <Badge badgeContent={dislike} color="error">
      👎
      </Badge>
      </IconButton>
    </div>
  );
}
