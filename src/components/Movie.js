import React from "react";
import { Link } from "react-router-dom";

// import AddModal from "./AddModal";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className='movie'>
      <h1>{movie.Title}</h1>
      <Link to='/description' state={{ movie }}>
        see more
      </Link>
      <div>
        {" "}
        <img
          width='200'
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
        <p>({movie.Year})</p>
      </div>
    </div>
  );
};

export default Movie;
