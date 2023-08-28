
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Profile from '../components/dashboard/Profile';
import Notes from '../components/dashboard/Notes';
import Weather from '../components/dashboard/Weather';
import News from '../components/dashboard/News';
import Timer from '../components/dashboard/Timer';


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
 
  const navigate = useNavigate();
  function navi() {
    navigate('/browse');
  }
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
        <div className="db-lower-timer">
          <Timer></Timer>
        </div>
      </div>
      <div className="db-right">
        <News></News>
      </div>
    <div className="btndashboard"><button onClick={navi}>Browse</button></div>
    </div>
  );
};

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;
