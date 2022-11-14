import React from "react";
import "./LoginScreen.css";
import SignInForm from "../components/SignInForm";

const LoginScreen = ({ signIn, setSignIn }) => {
  return (
    <>
      <div className="background-overlay"></div>
      <div id="login-screen">
        {!signIn && (
          <div className="login-screen-content">
            <h2 className="login-screen-content-header">
              Unlimited films, TV programs, and more.
            </h2>
            <h3 className="login-screen-content-subtitle">
              Watch anywhere. Cancel at any time.
            </h3>
            <span>
              Ready to watch? Enter your email to create or restart your
              membership.
            </span>
            <div className="login-screen-signup">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <button onClick={() => setSignIn(true)}>Get Started</button>
            </div>
          </div>
        )}
        {signIn && <SignInForm />}
      </div>
    </>
  );
};

export default LoginScreen;
