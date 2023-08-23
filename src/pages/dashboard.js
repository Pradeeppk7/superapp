import React from 'react';
import './Dashboard.css';
import dp from '../assets/dashboarddp.png'
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
    const userdata = JSON.parse(localStorage.getItem('userData'));
    const category = JSON.parse(localStorage.getItem('category'));
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
                                  <div className="db-chips">{category.map((item) => (
                                      <div className="chipsbtn">{item}</div>
                                  ))}</div>
                              </div>
              </div>
            </div>
            <div className="weather"></div>
          </div>
          <div className="db-upper-rightnotes"></div>
        </div>
        <div className="db-lower-timer"></div>
      </div>
      <div className="db-right"></div>
    </div>
  );
};

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;
