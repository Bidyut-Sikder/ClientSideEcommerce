import React from "react";
import "./css/Registration.css";

const Registration = () => {
  return (
    <div className="loginsingup">
      <div className="loginsignup-container">
        <h1>Sing Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
