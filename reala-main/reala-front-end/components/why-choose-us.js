import React from "react";
import SectionTitle from "./global/section-title";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdEngineering } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";

const WhyChooseUs = () => {
  return (
    <div className="wChoose section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="wChoose__intro">
              {/* <SectionTitle title="Why Choose Reala" position="left" /> */}
              <div className={`section-title left`}>
                <h1 style={{color: "#fff!important"}}>{"Why Choose Imma?"}</h1>
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
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <VscWorkspaceTrusted />
                    </div>
                    <h3>Trusted Company</h3>
                    <p>
                      Fusce elementum vulputate ipsum in molestie. Proin
                      interdum lectu blandit tortor facilisis efficitur
                      ultricies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdEngineering />
                    </div>
                    <h3>Experienced</h3>
                    <p>
                      Fusce elementum vulputate ipsum in molestie. Proin
                      interdum lectu blandit tortor facilisis efficitur
                      ultricies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <TbCertificate />
                    </div>
                    <h3>Certified Worker</h3>
                    <p>
                      Fusce elementum vulputate ipsum in molestie. Proin
                      interdum lectu blandit tortor facilisis efficitur
                      ultricies.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <FiHelpCircle />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Fusce elementum vulputate ipsum in molestie. Proin
                      interdum lectu blandit tortor facilisis efficitur
                      ultricies.
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
