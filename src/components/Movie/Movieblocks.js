import React, { useEffect, useState } from 'react';
import './Movieblocks.css';
import axios from 'axios';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Movieblocks = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };
    const fetchMovies = async () => {
      await axios
        .get(
          `https://moviesdatabase.p.rapidapi.com/titles?genre=${props.movie}&year=2022`,
          options
        )
        .then((response) => setMovies(response.data.results.slice(0, 4)))
        .catch((err) => console.error(err));
    };
    fetchMovies();
  }, []);

  
  return (
    <div className="movieself">
      <h2>{props.movie}</h2>
      <div className='movierow' >
        {movies.map((movie, index) => {
          console.log(movie?.primaryImage?.url);
          return (
            <div key={index} className='movieblock'>
              <img
                src={movie?.primaryImage?.url}
                
              />
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

Movieblocks.propTypes = propTypes;
Movieblocks.defaultProps = defaultProps;
// #endregion

export default Movieblocks;
