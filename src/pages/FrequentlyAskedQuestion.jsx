import React from 'react';

const FrequentlyAskedQuestions = () => {
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
    marginBottom: '10px',
  };

  const questionStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const answerStyle = {
    marginBottom: '20px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Frequently Asked Questions</h1>
      <div>
        <div style={questionStyle}>What is Lorem Ipsum?</div>
        <p style={answerStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div style={questionStyle}>Why do we use it?</div>
        <p style={answerStyle}>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout.
        </p>

        <div style={questionStyle}>Where does it come from?</div>
        <p style={answerStyle}>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>

        <div style={questionStyle}>Is it safe to use Lorem Ipsum?</div>
        <p style={answerStyle}>
          Yes, Lorem Ipsum is safe to use. It has been the industry's standard dummy text ever since
          the 1500s.
        </p>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
