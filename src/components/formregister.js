import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
const Formregister = () => {
  let Errors = {
    name: '',
    username: '',
    email: '',
    mobile: '',
    checkbox: '',
  };
  let initialValues = {
    name: '',
    username: '',
    email: '',
    mobile: 0,
    ischeck: false,
  };
  let [isError, setErrors] = useState(true);
  let [userValues, setUservalue] = useState(initialValues);
  let [userErrors, setUsererrors] = useState(Errors);
  const navigate = useNavigate();

  function validationCheck(e) {
    if (e.target.placeholder === 'Name') {
      if (e.target.value === '') {
        setUsererrors({ ...userErrors, name: 'Field is required' });
      } else if (e.target.value.length < 3) {
        setUsererrors({ ...userErrors, name: 'Please fill the valid Name' });
      } else {
        setUsererrors({ ...userErrors, name: '' });
        setErrors(false);
      }
    } else if (e.target.placeholder === 'UserName') {
      if (e.target.value === '') {
        setUsererrors({ ...userErrors, username: 'Field is required' });
      } else if (e.target.value.length < 3) {
        setUsererrors({
          ...userErrors,
          username: 'Please fill the valid Username',
        });
      } else {
        setUsererrors({ ...userErrors, username: '' });
        setErrors(false);
      }
    } else if (e.target.placeholder === 'Email') {
      if (e.target.value === '') {
        setUsererrors({ ...userErrors, email: 'Field is required' });
      } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        setUsererrors({ ...userErrors, email: 'Please fill the valid Email' });
      } else {
        setUsererrors({ ...userErrors, email: '' });
        setErrors(false);
      }
    } else if (e.target.placeholder === 'Mobile') {
      console.log(e.target.placeholder);

      if (e.target.value === '') {
        setUsererrors({ ...userErrors, mobile: 'Field is required' });
      } else if (
        !e.target.value.match('[0-9]{10}') ||
        e.target.value.length > 10
      ) {
        setUsererrors({
          ...userErrors,
          mobile: 'Please fill the valid Number',
        });
      } else {
        setUsererrors({ ...userErrors, mobile: '' });
        setErrors(false);
      }
    }
  }
  function checkboxvalidationandset(e) {
    setUservalue({ ...userValues, ischeck: e.target.checked });
    if (e.target.checked) {
      setUsererrors({ ...userErrors, checkbox: '' });
      setErrors(true);
    } else {
      setUsererrors({
        ...userErrors,
        checkbox: 'Check this box if you want to proceed',
      });
    }
  }

  function dataHandle(e) {
    e.preventDefault();
    let error = false;
    if (userValues.name === '') {
      setUsererrors({ ...userErrors, checkbox: 'Fields are invalid' });
      error = true;
    }
    if (userValues.username === '') {
      error = true;
      setUsererrors({ ...userErrors, checkbox: 'Fields are invalid' });
    }
    if (userValues.email === '') {
      error = true;
      setUsererrors({ ...userErrors, checkbox: 'Fields are invalid' });
    }
    if (userValues.mobile === 0) {
      error = true;
      setUsererrors({
        ...userErrors,
        checkbox: 'Fields are invalid',
      });
    }
    if (!userValues.ischeck) {
      error = true;
      setUsererrors({
        ...userErrors,
        checkbox: 'Fields are invalid',
      });
    }
    if (
      userErrors.name === '' &&
      userErrors.email === '' &&
      userErrors.mobile === '' &&
      userErrors.checkbox === '' &&
      userErrors.username === '' &&
      !error
    ) {
      storeData();
      navigate('/category');
    }
  }
  function storeData() {
    window.localStorage.setItem('userData', JSON.stringify(userValues));
  }

  return (
    <div className="formcomponent">
      <h1 className="heading">Super app</h1>
      <p className="subheading">Create your new account</p>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUservalue({ ...userValues, name: e.target.value })}
        onBlur={validationCheck}
        className={userErrors.name.length > 0 ? 'redbox' : 'normal'}
      />
      <span className="inputerror">{userErrors.name}</span>
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) =>
          setUservalue({ ...userValues, username: e.target.value })
        }
        className={userErrors.username.length > 0 ? 'redbox' : 'normal'}
        onBlur={validationCheck}
      />
      <span className="inputerror">{userErrors.username}</span>
      <input
        type="email"
        placeholder="Email"
        className={userErrors.email.length > 0 ? 'redbox' : 'normal'}
        onChange={(e) => setUservalue({ ...userValues, email: e.target.value })}
        onBlur={validationCheck}
      />
      <span className="inputerror">{userErrors.email}</span>
      <input
        type="tel"
        placeholder="Mobile"
        className={userErrors.mobile.length > 0 ? 'redbox' : 'normal'}
        maxLength="9999999999"
        onChange={(e) =>
          setUservalue({ ...userValues, mobile: e.target.value })
        }
        onBlur={validationCheck}
      />
      <span className="inputerror">{userErrors.mobile}</span>
      <div className="checkcontent">
        <input
          className="checkbox"
          id="check"
          value={userValues.ischeck}
          name="check"
          type="checkbox"
          onChange={checkboxvalidationandset}
        />
        <label htmlFor="check">Share my registration data with Superapp</label>
      </div>
      <span className="inputerror" id="checkboxerror">
        {userErrors.checkbox}
      </span>
      <button onClick={dataHandle} id="btnsignup">
        SIGN UP
      </button>
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

Formregister.defaultProps = defaultProps;
// #endregion

export default Formregister;
