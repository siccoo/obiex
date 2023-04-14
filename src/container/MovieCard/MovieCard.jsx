import React, { useEffect, useState } from "react";
import "./MovieCard.css";

import makeAPICall from "../../utils/apiUtils";

const MovieCard = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const seeMovies = () => {
      return makeAPICall({
        path: "https://api.themoviedb.org/3/movie/popular?api_key=3389f1e448c6a36c49905fe30d46d6fe&language=en-US&page=1",
        payload: null,
        method: "GET",
      })
        .then((result) => {
          console.log(result);
          setState(result);
        })
        .catch((err) => console.log(err));
    };

    seeMovies();
  }, []);

  return (
    <>
      {state &&
        state?.result?.map((item) => (
          <>
            <div className="movie--img">
              <img
                src={
                  "https://api.themoviedb.org/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
                }
                alt=""
              />
            </div>
            <div className="movie--info">
              <h3>{item.title}</h3>
              <p>
                <span>{item.release_date}</span> |{" "}
                <span>{item.vote_average}</span>
              </p>
            </div>
          </>
        ))}
    </>
  );
};

export default MovieCard;
