import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <section className="home-container">
      <Navbar />
      <section className="home-banner-container">
        <section className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </section>
        <section className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot &Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </section>
        <section className="home-image-container">
          <img src={BannerImage} alt="" />
        </section>
      </section>
    </section>
  );
};

export default Home;
