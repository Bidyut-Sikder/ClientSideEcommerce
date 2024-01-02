import React from 'react';
import './css/NotFound.css'

const NotFoundPage = () => {


  return (
    <div className='pageStyle'>
      <h1 className='headingStyle'>404 - Not Found</h1>
      <p className='messageStyle'>
        Sorry, the page you are looking for does not exist.
      </p>
      <p>
        <a href="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
          Go to Home
        </a>
      </p>
    </div>
  );
};

export default NotFoundPage;
