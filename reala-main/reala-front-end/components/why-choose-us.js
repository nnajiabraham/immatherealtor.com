import React from "react";
import SectionTitle from "./global/section-title";
import { FaUserGroup } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";
import { RiHomeHeartFill } from "react-icons/ri";
import { BsHouseCheckFill, BsGraphUpArrow,BsBookFill } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <div className="wChoose section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="wChoose__intro">
              {/* <SectionTitle title="Why Choose Reala" position="left" /> */}
              <div className={`section-title left`}>
                <h1 style={{color: "#fff"}}>{"Why Choose Imma?"}</h1>
                {/* <h1 className="text-white">{"Why Choose Imma"}</h1> */}
              </div>
              {/* <p className="fs-4">keep calm, I've got your back.</p> */}
              <p>
                Choosing Imma as your real estate agent means partnering with someone who brings unmatched enthusiasm and a fresh, innovative approach to the market.
                Imma's dedication to understanding your unique needs ensures that your real estate aspirations aren't just met—they're exceeded.
                Whether you're looking to buy your first home, invest in lucrative properties, or diversify your portfolio, Imma is committed to turning your real estate dreams into tangible achievements.
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="wChoose__content">
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <RiHomeHeartFill />
                    </div>
                    <h3>Buying</h3>
                    <p>
                      Find Your Dream Home: Imma walks you through every step, making sure you settle only for the best.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <BsHouseCheckFill />
                    </div>
                    <h3>Selling</h3>
                    <p>
                      Get the Best Deal: Imma's sharp instincts and tailor-made strategies aim to get you the best price, stress-free.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdApartment />
                    </div>
                    <h3>Rentals</h3>
                    <p>
                      Your Next Cozy Corner: With Imma, find rentals that feel like home without breaking the bank.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <FaUserGroup />
                    </div>
                    <h3>Group Purchase</h3>
                    <p>
                      Better Together: Imma simplifies co-owning a property, making it easy and hassle-free for everyone involved.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <BsGraphUpArrow />
                    </div>
                    <h3>Financial Investment</h3>
                    <p>
                      Smart Choices, Big Returns: Let Imma guide you through lucrative investment opportunities in the real estate market.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <BsBookFill />
                    </div>
                    <h3>Real Estate Blogs</h3>
                    <p>
                      Knowledge is Power: Imma’s blog is your go-to guide for the latest market trends, tips, and insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
