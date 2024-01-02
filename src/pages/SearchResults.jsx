import React from 'react';

const SearchResultPage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const resultStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '20px',
    marginBottom: '5px',
  };

  const descriptionStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Search Results</h1>
      <div style={resultStyle}>
        <h2 style={titleStyle}>Search Result Title 1</h2>
        <p style={descriptionStyle}>
          Description of search result 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a href="/result1">Read more</a>
      </div>

      <div style={resultStyle}>
        <h2 style={titleStyle}>Search Result Title 2</h2>
        <p style={descriptionStyle}>
          Description of search result 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="/result2">Read more</a>
      </div>

      <div style={resultStyle}>
        <h2 style={titleStyle}>Search Result Title 3</h2>
        <p style={descriptionStyle}>
          Description of search result 3. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <a href="/result3">Read more</a>
      </div>
    </div>
  );
};

export default SearchResultPage;
