import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ signIn, setSignIn, authenticated }) => {
  const [showBackground, setShowBackground] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${showBackground && "nav-dark"}`}>
      <Link to="/" onClick={() => setSignIn(false)}>
        <img
          className="nav-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix logo"
        />
      </Link>
      {authenticated && (
        <img
          className="nav-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="profile avatar"
        />
      )}

      {!signIn && <button onClick={() => setSignIn(true)}>Sign In</button>}
    </div>
  );
};

export default Nav;
