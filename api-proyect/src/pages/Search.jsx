import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../util/useFetch";
import { Navbar } from "../components/Navbar";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Search = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");
  const URL = `${searchUrl}?api_key=${apiKey}&query=${query}`;
  const movies = useFetch(URL, query);

  return (
    <>
      <Navbar />
      <div className="Main">
        <h2 className="Main-h2">
          Resultados para: <span className="Main-span">{query}</span>
        </h2>
        <section className="Main-section">
        {movies.map((movie, key) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
    </>
  );
};
