import React from 'react';
import './formregister.css';
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
const formregister = () => {
  return (
    <div className="formcomponent">
      <h1 className="heading">Super app</h1>
      <p className="subheading">Create your new account</p>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="UserName" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Mobile" />
      <div className="checkcontent">
        <input className="checkbox" id="check" name="check" type="checkbox" />
        <label htmlFor="check">Share my registration data with Superapp</label>
      </div>
      <button id="btnsignup">SIGN UP</button>
      <p className="declaration">
        By clicking on Sign up. you agree to Superapp{' '}
        <span className="greentext"> Terms and Conditions of Use </span>
        <br></br>
        <br />
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp
        <span className="greentext"> Privacy Policy </span>
      </p>
    </div>
  );
};

formregister.defaultProps = defaultProps;
// #endregion

export default formregister;
