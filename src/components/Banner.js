import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url(https://torranceca.files.wordpress.com/2019/10/netflix.jpg?w=1400&h=)",
        backgroundPosition: "center center"
      }}
    ></header>
  );
};

export default Banner;
