import React, { useRef } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import "./SignInForm.css";

const SignInForm = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailInputRef.current.value,
      passwordInputRef.current.value
    )
      .then((authUser) => {
        // Signed up
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailInputRef.current.value,
      passwordInputRef.current.value
    )
      .then((authUser) => {
        // Signed in
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div id="signin-form">
      <div id="signin-form-content">
        <h2 id="signin-header">Sign In</h2>
        <input
          type="email"
          name="username"
          id="username"
          placeholder="username"
          ref={emailInputRef}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          ref={passwordInputRef}
        />
        <button id="signin-button" type="button" onClick={logIn}>
          Sign In
        </button>
        <p>
          New to Netflix?{" "}
          <span className="important-text" onClick={register}>
            Sign up now.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
