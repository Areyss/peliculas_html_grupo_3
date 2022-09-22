// import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";


function App() {
  return (
      <Router>
        <Routes> 
          <Route path="/" element={<HomePage/>} />
          <Route path="/pelicula"element={<MoviePage/>}/>    
        </Routes>
      </Router>    
  );
}

export default App;
