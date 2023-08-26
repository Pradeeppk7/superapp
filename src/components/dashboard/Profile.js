import React from 'react';
import dp from '../../assets/dashboarddp.png';
import './Profile.css';
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
const Profile = () => {
  const userdata = JSON.parse(localStorage.getItem('userData'));
  const category = JSON.parse(localStorage.getItem('category'));
  return (
    <div>
      {' '}
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
  );
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;
// #endregion

export default Profile;
