import React from 'react';

import "../styles/error404.css";
import errorImage from "../assets/error.jpg"

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-header">
          <h1>404</h1>
          <img src={errorImage} alt="404 Error" className="error-image" />
        </div>
        <div className="error-text">
          <h2>Page Not Found</h2>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <a href="/" className="back-home-link">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default Error404;
