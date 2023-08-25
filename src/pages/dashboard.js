import React, { useState } from 'react';
import './Dashboard.css';
import dp from '../assets/dashboarddp.png';
import axios from 'axios';
import { render } from '@testing-library/react';
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
  const userdata = JSON.parse(localStorage.getItem('userData'));
  const category = JSON.parse(localStorage.getItem('category'));
  let [news, setNews] = useState([]);

  // fetchNews();

  // function fetchNews() {
  //   axios
  //     .get(
  //       'https://newsapi.org/v2/everything?q=India&from=2023-08-23&sortBy=popularity&pageSize=1&language=en&apiKey=' +
  //         apinewKey
  //     )
  //     .then((res) => setNews(res.data.articles))
  //     .catch((err) => {
  //       alert('something wrong');
  //     });
  // }

  return (
    <div className="dashboard-bg">
      <div className="db-left">
        <div className="db-upper">
          <div className="db-upper-left">
            <div className="profile">
              <div className="profilecontent">
                <img src={dp} alt="" />
                <div className="ctn">
                  <h1 className="username">{userdata.name}</h1>
                  <h1 className="useremail">{userdata.email}</h1>
                  <h1 className="userid">{userdata.username}</h1>
                  <div className="db-chips">
                    {category.map((item, index) => (
                      <div className="chipsbtn" key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="weather"></div>
          </div>
          <div className="db-upper-rightnotes"></div>
        </div>
        <div className="db-lower-timer"></div>
      </div>
      <div className="db-right">
        <div className="newssection">
          <h6>{news.author}
          <br></br>
          {news.title}</h6>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;
