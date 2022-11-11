import React from "react";
import "./SignInForm.css";

const SignInForm = ({ setSignIn }) => {
  return (
    <div id="signin-form">
      <div id="signin-form-content">
        <h2 id="signin-header">Sign In</h2>
        <input
          type="email"
          name="username"
          id="username"
          placeholder="username"
        />
        <input
          type="passsword"
          name="password"
          id="password"
          placeholder="password"
        />
        <button id="signin-button" type="submit">
          Sign In
        </button>
        <p>
          New to Netflix?{" "}
          <span className="important-text" onClick={() => setSignIn(false)}>
            Sign up now.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
