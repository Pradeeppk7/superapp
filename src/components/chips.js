import React from 'react';
import './chips.css';
import category from '../data/category-data';
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
const Chips = (props) => {
  function removeCategory() {
    props.setCategories((current) => current.filter((id) => id !== props.name));
  }
  return (
    <div className="chips">
      {' '}
      {props.name} <button onClick={removeCategory}>x</button>
    </div>
  );
};

Chips.propTypes = propTypes;
Chips.defaultProps = defaultProps;
// #endregion

export default Chips;
