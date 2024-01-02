import React from 'react';

const ReviewPage = () => {
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

  const reviewStyle = {
    marginBottom: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const reviewerInfoStyle = {
    marginBottom: '15px',
    fontWeight: 'bold',
  };

  const ratingStyle = {
    fontSize: '24px',
    marginBottom: '15px',
  };

  const commentStyle = {
    fontSize: '16px',
  };

  // Sample review data (you can fetch this from an API or database)
  const reviews = [
    {
      id: 1,
      reviewer: 'John Doe',
      rating: 4.5,
      comment: 'Great product! Highly recommended.',
    },
    {
      id: 2,
      reviewer: 'Jane Smith',
      rating: 5,
      comment: 'Excellent service and fast delivery.',
    },
    {
      id: 3,
      reviewer: 'Alice Johnson',
      rating: 3.8,
      comment: 'Good quality but shipping took a bit long.',
    },
  ];

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id} style={reviewStyle}>
          <div style={reviewerInfoStyle}>
            <span>{review.reviewer}</span>
            <span style={{ marginLeft: '10px' }}>Rating: {review.rating}</span>
          </div>
          <div style={ratingStyle}>Rating: {review.rating}</div>
          <p style={commentStyle}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
