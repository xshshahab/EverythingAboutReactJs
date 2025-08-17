import { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "John Wick",
    ratings: 8.4,
  });

  const handleUpdate = () => {
    let movieUpdate = { ...movie, ratings: 8 };
    setMovie(movieUpdate);
  };

  return (
    <section>
      <h1>Title : {movie.title}</h1>
      <p>Rating: {movie.ratings}</p>

      <button onClick={handleUpdate}>Update Rating</button>
    </section>
  );
};

export default Movie;
