import React, { useEffect, useState } from "react";
import "./MovieCard.css";

import makeAPICall from "../../utils/apiUtils";

const MovieCard = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const seeMovies = () => {
      return makeAPICall({
        path: "https://api.themoviedb.org/3/discover/movie?api_key=3389f1e448c6a36c49905fe30d46d6fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
        // https://api.themoviedb.org/3/discover/movie?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US
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
      {state.length === 0 ? (
        "No movie"
      ) : (
        <>
          {state?.results?.map((item) => (
            <div className="movie__cards">
              <div className="movie--img">
                <img src={`https://api.themoviedb.org${item.poster_path}`} alt="" />
              </div>
              <div className="movie--info">
                <h3>{item.title}</h3>
                <p>
                  <span>{item.release_date}</span> |{" "}
                  <span>{item.vote_average}</span>
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MovieCard;
