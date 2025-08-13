import { useState } from "react";

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", rating: 9.0 },
    { id: 2, title: "Interstellar", rating: 8.6 },
    { id: 3, title: "The Matrix", rating: 8.7 },
  ]);

  const handleChangeMovies = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick" } : m))
    );
  };

  return (
    <section>
      <h1>Top Rated Movies List</h1>
      {movies.map((mov, idx) => {
        return (
          <div key={(idx * 2) / 5}>
            <h2>{mov.title}</h2>
            <p>{mov.rating}</p>
          </div>
        );
      })}

      <button onClick={handleChangeMovies}>Chnage Movie</button>
    </section>
  );
};

export default MoviesList;
