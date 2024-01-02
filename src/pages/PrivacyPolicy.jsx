// import React from 'react';

// const PrivacyPolicy = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default PrivacyPolicy;









import React from 'react';

const PrivacyPolicy = () => {
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

  const paragraphStyle = {
    marginBottom: '20px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>
      <p style={paragraphStyle}>
        Your privacy is important to us. It is our policy to respect your privacy regarding any
        information we may collect from you across our website.
      </p>
      <h2 style={headingStyle}>Information We Collect</h2>
      <p style={paragraphStyle}>
        We may collect personal information including but not limited to your name, email address,
        and contact information. We collect this information only when you voluntarily provide it to
        us.
      </p>
      <h2 style={headingStyle}>How We Use Information</h2>
      <p style={paragraphStyle}>
        We use the information collected to provide and maintain our services, notify you about
        changes, and improve our offerings. We do not share this information with third parties
        unless required by law or with your consent.
      </p>
      <h2 style={headingStyle}>Security</h2>
      <p style={paragraphStyle}>
        We take precautions to protect your information. However, no method of transmission over the
        internet or electronic storage is 100% secure. We cannot guarantee absolute security.
      </p>
      <h2 style={headingStyle}>Changes to This Privacy Policy</h2>
      <p style={paragraphStyle}>
        We reserve the right to update our privacy policy. We will notify you of any changes by
        posting the new policy on this page.
      </p>
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={paragraphStyle}>
        If you have any questions about our privacy policy, please contact us at
        <a href="mailto:privacy@example.com">privacy@example.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;