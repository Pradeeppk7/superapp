import React, { useState } from 'react';
import './Category.css';
import category from '../data/category-data';
import Block from '../components/block';
import { useEffect } from 'react';
import Chips from '../components/chips';
import { GoAlertFill } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const Category = () => {
  let [categories, setCategories] = useState([]);
  // let [isClicked, setClicked] = useState({});
  let [iswarning, setWarning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length) {
      if (categories.length > 2) {
        setWarning(true);
      } else {
        setWarning(false);
      }
    }
  }, [categories.length]);
  function handleSubmit() {
    if (categories.length > 2) {
      window.localStorage.setItem('category', JSON.stringify(categories));
    }
  }

  return (
    <div className="bgblack">
      <div className="left">
        <div className="contents">
          <h2 className="appname">Super app</h2>
          <h1 className="subhead">
            Choose your <br></br>entertainment <br></br> category
          </h1>
          <div className="chipsself">
            {categories.map((item, index) => (
              <Chips
                key={index}
                name={item}
                categories={categories}
                setCategories={setCategories}
              ></Chips>
            ))}
          </div>
          {!iswarning ? (
            <div className="warning">
              <GoAlertFill id="alertfill" /> <p>Minimum 3 category required</p>
            </div>
          ) : (
            <h1></h1>
          )}
        </div>
      </div>
      <div className="right">
        <div className="blocksself">
          {category.map((item) => (
            <Block
              idx={item.id}
              name={item.name}
              key={item.id}
              bg={item.color}
              image={item.image}
              // setClicked={setClicked}
              // isClicked={isClicked}
              categories={categories}
              setCategories={setCategories}
            />
          ))}
          <div className="btn-alignright">
            <button id="btn-page2" onClick={handleSubmit}>Next Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// #endregion

export default Category;
