import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const MovieApp = () => {


  
  const movieArray = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];

  
  const bigMovies = movieArray.map(movie => <p>{movie.title}</p>);
 
  return (
    <div>{bigMovies}</div>
  )
  
  }

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieApp/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
