import React, { useState } from "react";

const Hero = () => {

  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-3">
              <span style={{display: "block"}}>Meet Imma:</span>
              <span>Your Friendly Neighborhood Real Estate Agent</span></h1>
            <h3 className="mb-5 fs-5">
              Turning Your Real Estate Dreams into Your Everyday Reality
            </h3>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <img src="images/headshot.jpg" alt="hero" />
              <div className="image-two">
                <img src="images/house1.jpg" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
