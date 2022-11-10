import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../requests";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  useEffect(() => {
    const fetchBannerMovies = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const randomNum = Math.floor(
        Math.random() * response.data.results.length - 1
      );
      setBannerMovie(response.data.results[randomNum]);
    };

    fetchBannerMovies();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path}')`
      }}
    >
      <div className="banner-content">
        <h2 className="banner-title">{bannerMovie?.name}</h2>
        <div className="banner-actions">
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className="banner-description">{bannerMovie?.overview}</div>
      </div>
    </header>
  );
};

export default Banner;
