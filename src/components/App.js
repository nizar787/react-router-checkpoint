import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import MovieDescription from "./MovieDescription";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/description' element={<MovieDescription />} />
      </Routes>
    </div>
  );
}

export default App;
