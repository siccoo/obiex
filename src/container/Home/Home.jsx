import React from "react";
import Navbar from "../../components/Nav/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <Navbar />
      <Hero />
      <div className="main">
        <div className="main__content">
<p>Movies for you</p>
<div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
