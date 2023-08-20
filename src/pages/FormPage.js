import React from 'react';
import './FormPage.css';
import Formregister from '../components/formregister';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

const defaultProps = {};

/**
 *
 */
const FormPage = () => {
  return (
    <div className="formpage">
      <div className="leftsection">
        <h1 className="content">Discover new things on Superapp</h1>
      </div>
      <div className="rightsection">
        <div className="forms">
          <Formregister></Formregister>
        </div>
      </div>
    </div>
  );
};

FormPage.defaultProps = defaultProps;
// #endregion

export default FormPage;
