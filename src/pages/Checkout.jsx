import React from 'react';

const CheckoutPage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s',
  };

  const handleCheckout = () => {
    // Handle checkout functionality here
    console.log('Processing checkout');
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Checkout</h1>
      <form>
        <input type="text" placeholder="Name" style={inputStyle} required />
        <input type="email" placeholder="Email" style={inputStyle} required />
        <input type="text" placeholder="Address" style={inputStyle} required />
        <input type="text" placeholder="City" style={inputStyle} required />
        <input type="text" placeholder="Postal Code" style={inputStyle} required />
        <button type="button" style={buttonStyle} onClick={handleCheckout}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
