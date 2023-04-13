import React from 'react';
import "./Hero.css";

import Star from "../../assets/svg/star.svg";
import Play from "../../assets/png/play-circle.png";
import InfoCircle from "../../assets/png/info-circle.png"

const Hero = () => {
  return (
    <section>
        <div className="hero__section">
          <p className="hero__section-info">
            <span>Featured</span> | 2019 | Action, Sci-Fi, Drama
          </p>
          <hgroup>
            <h1>Star Wars: The Rise of Skywalker</h1>
            <div>
              <span className="rating">
                <img src={Star} alt="star" />
                9.0
              </span>
              <span>16+</span>
            </div>
          </hgroup>
          <p className="hero__section__movie-info">
            The revival of Emperor Palpatine resurrects the battle between the
            Resistance and the First Order while the Jedi's legendary conflict
            with the Sith Lord comes to a head.
          </p>
          <div className="hero__section__movie-links">
            <a href="/">
              <img src={Play} alt="play-circle" />
              <span>Watch now</span>
            </a>
            <a href="/">
              <img src={InfoCircle} alt="info-circle" />
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Hero