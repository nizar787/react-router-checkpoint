import React, { useReducer, useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import AddModal from "./AddModal";

function App() {
  const API_KEY = "65525897";

  const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

  const initialState = {
    loading: true,
    movies: [],
    errorMessage: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_MOVIES_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null,
        };
      case "SEARCH_MOVIES_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: action.payload,
        };
      case "SEARCH_MOVIES_FAILURE":
        return {
          ...state,
          loading: false,
          errorMessage: action.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  const [dark, setdark] = useState(true);

  return (
    <div className={dark ? "App" : "test"}>
      <div className='Nav'>
        <Header text='MovieApp' />
        <Search search={search} />
        <AddModal />
      </div>
      <div className=' hii'>
        <button className='button' onClick={() => setdark(!dark)}>
          dark
        </button>
        <p className='App-intro'>App where you can find your best movies </p>
      </div>

      <div className='movies'>
        {loading && !errorMessage ? (
          <span className='loader'></span>
        ) : errorMessage ? (
          <div className='errorMessage'>{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
