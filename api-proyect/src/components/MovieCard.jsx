import { Link } from "react-router-dom";

const imgUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="MovieCard">
      <section className="MovieCard-contImg">
        <img
          className="MovieCard-img"
          src={imgUrl + movie.poster_path}
          alt={movie.title}
        />
      </section>
      <section className="MovieCard-info">
        <h2 className="MovieCard-h2">{movie.title}</h2>
        <p className="MovieCard-p">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="MovieCard-svg"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
          {movie.vote_average}
        </p>
        {showLink && (
          <Link className="MovieCard-link MovieCard--absolute MovieCard-link--button" to={`/movie/${movie.id}`}>
            Detalle
          </Link>
        )}
      </section>
    </div>
  );
};
