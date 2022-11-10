import React, { useEffect, useState } from "react";
import "./ShowRow.css";
import axios from "../axios";

const ShowRow = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(fetchUrl);
      console.log(response);
      setMovies(response.data.results);
      return response;
    };

    fetchMovies();
  }, [fetchUrl]);

  const moviesWithImages = movies.filter((movie) => movie?.backdrop_path);

  return (
    <div className="show-row">
      <h2 className="show-row-title">{title}</h2>
      <div className="shows">
        {moviesWithImages.map((movie) => (
          <img
            key={movie.id}
            className={`show ${isLargeRow && "netflix-original-show"}`}
            src={`${baseURL}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowRow;
