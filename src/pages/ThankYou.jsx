import React from 'react';

const ThankYouPage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    color: '#333',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const messageStyle = {
    fontSize: '18px',
    marginBottom: '30px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Thank You!</h1>
      <p style={messageStyle}>
        Your message has been received. We'll get back to you as soon as possible.
      </p>
      <p>
        <a href="/" style={linkStyle}>
          Return to Home
        </a>
      </p>
    </div>
  );
};

export default ThankYouPage;