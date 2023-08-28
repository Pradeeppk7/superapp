import React, { useEffect, useState } from 'react';
import './Browse.css';
import dp from '../assets/browsedp.png';
import Movieblocks from '../components/Movie/Movieblocks';
import { useNavigate } from 'react-router-dom';
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
const Browse = () => {
  let [category, setCategory] = useState();
  const navigate = useNavigate();

  let data = JSON.parse(localStorage.getItem('category'));
  function navi() {
    navigate('/category');
  }
  return (
    <div className="browse">
      <div className="browse-header">
        <h1>Super app</h1>
        <img src={dp} alt="" />
      </div>
      <div className="browse-content">
        <div className="browse-subheading">
          <p>Entertainment according to your choice</p>
        </div>
        <div className="browse-collections">
          {data.map((item, index) => (
            <Movieblocks key={index} movie={item} />
          ))}
        </div>
      </div>
      <button onClick={navi}>Home</button>
    </div>
  );
};

Browse.propTypes = propTypes;
Browse.defaultProps = defaultProps;
// #endregion

export default Browse;
