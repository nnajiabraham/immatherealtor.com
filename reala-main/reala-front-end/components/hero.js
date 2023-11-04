import React, { useState } from "react";

const Hero = () => {

  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-4 font-weight-bold__underline">
              Meet Imma, Manitoba's Friendly Neighborhood Real Estate Agent
            </h1>
            <h4 className="mb-4 color-primary font-weight-bold">
              Turning Real Estate Dreams into Everyday Reality
            </h4>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <img src="images/headshot2.jpg" alt="hero" />
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
