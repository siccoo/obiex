import React from 'react';
import "./Hero.css";

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
                <img src="@/assets/images/star.svg" alt="rating" />
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
              <img src="" alt="" />
              <span>Watch now</span>
            </a>
            <a href="/">
              <img src="" alt="" />
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Hero