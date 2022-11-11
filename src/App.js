import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import Nav from "./components/Nav";

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <div className="app">
      <Nav />
      <Router>
        {!user && <LoginScreen />}
        {user && (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
