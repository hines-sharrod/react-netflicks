import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Nav from "./components/Nav";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="app">
      <Router>
        <Nav
          authenticated={authenticated}
          signIn={signIn}
          setSignIn={setSignIn}
        />
        {!authenticated && (
          <LoginScreen signIn={signIn} setSignIn={setSignIn} />
        )}
        {authenticated && (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
