import { useState } from "react";

import { useFetch } from "../util/useFetch";
import { MovieCard } from "../components/MovieCard";
import { Navbar } from "../components/Navbar";

const apiUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
  const URL = `${apiUrl}top_rated?api_key=${apiKey}`;
  const topMovies = useFetch(URL, "");
  const [active, setActive] = useState(false);

  return (
    <>
      <Navbar />

      <div className="Main">
        <h2 className="Main-h2">Mejores películas</h2>
        <section className="Main-section">
          {topMovies.map((movie, key) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
    </>
  );
};
