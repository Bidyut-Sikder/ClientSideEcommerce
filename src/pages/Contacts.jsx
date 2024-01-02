import React from 'react';

const ContactUsPage = () => {
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

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const textareaStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  };

  const submitButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form>
        <label style={labelStyle}>Name:</label>
        <input type="text" style={inputStyle} />

        <label style={labelStyle}>Email:</label>
        <input type="email" style={inputStyle} />

        <label style={labelStyle}>Message:</label>
        <textarea rows="5" style={textareaStyle}></textarea>

        <button type="submit" style={submitButtonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
