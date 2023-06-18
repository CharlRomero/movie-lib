import { useParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const getMovie = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const URL = `${moviesUrl}${id}?api_key=${apiKey}`;
    getMovie(URL);
  }, []);

  return (
    <>
      <Navbar />
      {movie && (
        <section className="Movie">
          <MovieCard className="Movie-card" movie={movie} showLink={false} />
          <section className="Movie-info">
            <p className="Movie-p Movie-p--tagline">{movie.tagline}</p>
            <section className="Movie-data">
              <section className="Movie-data--flex">
                <h3 className="Movie-h3">Presupuesto:</h3>
                <p className="Movie-p">{formatCurrency(movie.budget)}</p>
              </section>
              <section className="Movie-data--flex">
                <h3 className="Movie-h3">Ganancia:</h3>
                <p className="Movie-p">{formatCurrency(movie.revenue)}</p>
              </section>
              <section className="Movie-data--flex">
                <h3 className="Movie-h3">Duración:</h3>
                <p className="Movie-p">{movie.runtime} min</p>
              </section>
              <section className="Movie-data--overview">
                <h3 className="Movie-h3">Descripción</h3>
                <p className="Movie-p">{movie.overview}</p>
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
};
