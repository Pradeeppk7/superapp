import React from 'react';
import './Browse.css';
import dp from '../assets/browsedp.png';
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
  return (
    <div className="browse">
      <div className="browse-header">
        <h1>Super app</h1>
        <img src={dp} alt="" />
      </div>
      <div className="browse-content">
        <div className="browse-subheading"><p>Entertainment according to your choice</p></div>
        <div className="browse-collections">{}</div>
      </div>
    </div>
  );
};

Browse.propTypes = propTypes;
Browse.defaultProps = defaultProps;
// #endregion

export default Browse;
