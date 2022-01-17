import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

function MovieDescription() {
  const location = useLocation();
  const { movie } = location.state;
  return (
    <div className='mov'>
      <Navigation />
      <div className='navbar'>
        <ul>
          <li>movie</li>
        </ul>
      </div>
      <Link to='/'>
        <button>home</button>
      </Link>

      <h1>{movie.Title}</h1>
      <img
        width='200'
        alt={`The movie titled: ${movie.Title}`}
        src={movie.Poster}
      />
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieDescription;
