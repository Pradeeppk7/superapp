import React, { useState, useEffect } from 'react';
import './Dashboard.css';

import axios from 'axios';
import Profile from '../components/dashboard/Profile';
import Notes from '../components/dashboard/Notes';
import Weather from '../components/dashboard/Weather';


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
const Dashboard = () => {
  const apinewKey = '2c625dad350447aab637bd859c2158a4';
 
  let [news, setNews] = useState([]);
  //   useEffect(()=>{
  //     const fetchNews = async()=>{
  //        await axios
  //        .get(
  //          'https://newsapi.org/v2/everything?q=India&from=2023-08-23&sortBy=popularity&pageSize=1&language=en&apiKey=' +
  //            apinewKey
  //        ).then(async(res) =>await(res.data.articles)).then((articles)=>console.log(articles.title))
  //        .catch((err) => {
  //          console.log('something wrong');
  //        });
  //     }
  //     fetchNews();
  // },[])

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     await fetch(
  //       'https://newsapi.org/v2/everything?q=India&from=2023-08-23&sortBy=popularity&pageSize=1&language=en&apiKey=' +
  //         apinewKey
  //     )
  //       .then(async (data) => await data.json())
  //       .then((res) => console.log(res.articles.author));
  //   };
  //   fetchNews();
    
  // }, []);

  return (
    <div className="dashboard-bg">
      <div className="db-left">
        <div className="db-upper">
          <div className="db-upper-left">
            <div className="profile">
             <Profile/>
            </div>
            <div className="weather">
              <Weather/>
            </div>
          </div>
          <div className="db-upper-rightnotes">
            <Notes/>
          </div>
        </div>
        <div className="db-lower-timer"></div>
      </div>
      <div className="db-right">
        <div className="newssection">
          <h6>
            {news.author}
            <br></br>
            {news.title}
          </h6>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;
