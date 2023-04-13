import React from "react";
import Navbar from "../../components/Nav/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../../components/Footer/Footer";

import "./Home.css";
import LeftArrow from "../../assets/svg/arrow-left.svg";
import RightArrow from "../../assets/svg/arrow-right.svg";
import MovieCard from "../MovieCard/MovieCard";

const Home = () => {
  return (
    <div className="hero">
      <Navbar />
      <Hero />
      <div className="main">
        <div className="main__content">
          <p>Movies for you</p>
          <div>
            <a href="/">
              <img src={LeftArrow} alt="left-arrow" />
            </a>
            <a href="/">
              <img src={RightArrow} alt="right-arrow" />
            </a>
          </div>
        </div>
        <div className="main__movie--card">
          <MovieCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
