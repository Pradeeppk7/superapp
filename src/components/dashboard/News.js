import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';
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
const News = () => {
  const apinewKey = '2c625dad350447aab637bd859c2158a4';

  let [news, setNews] = useState([]);
  let [timepublished, setTime] = useState();
  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('https://newsapi.org/v2/everything?q=India&from=2023-08-23&sortBy=popularity&pageSize=1&language=en&apiKey=' +
      apinewKey);

      setNews(response.data.articles[0]);
      setTime(response.data.articles[0].publishedAt.slice(0, 10) +" | "+  response.data.articles[0].publishedAt.slice(11,16));
    };
    fetchNews();
  }, []);
  //   if (!news.length) {
  //       return (<p>loading</p>);
  // }
  return (
    <div className="newssection">
      <div className="uppernews">
        <img src={news.urlToImage} alt="" />
        <div className="transtitle"><h1>
          {news.title}</h1>
          <p>{timepublished}</p></div>
      </div>
      <div className="lowernews">
        <p>{news.description }</p>
      </div>
    </div>
  );
};

News.propTypes = propTypes;
News.defaultProps = defaultProps;
// #endregion

export default News;
