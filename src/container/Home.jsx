import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div class="hero__section">
          <p class="hero__section-info">
            <span>Featured</span> | 2019 | Action, Sci-Fi, Drama
          </p>
          <hgroup>
            <h1>Star Wars: The Rise of Skywalker</h1>
            <div>
              <span class="rating">
                <img src="@/assets/images/star.svg" alt="rating" />
                9.0
              </span>
              <span>16+</span>
            </div>
          </hgroup>
          <p class="hero__section__movie-info">
            The revival of Emperor Palpatine resurrects the battle between the
            Resistance and the First Order while the Jedi's legendary conflict
            with the Sith Lord comes to a head.
          </p>
          <div class="hero__section__movie-links">
            <a href="/">
              <img src="@/assets/images/play-circle.svg" alt="" />
              <span>Watch now</span>
            </a>
            <a href="/">
              <img src="@/assets/images/info-circle.svg" alt="" />
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
