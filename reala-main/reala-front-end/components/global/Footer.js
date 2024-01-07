import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";


const Footer = ({bgColor}) => {
  return (
    <div
      className="footer footer-padding-t"
      style={{
        backgroundColor: "#f5f5f5"
        // backgroundColor: bgColor ? bgColor : "#f5f5f5",
      }}
    >
      <div className="container">
        <div className="row footer-padding" style={{justifyContent: "space-evenly"}}>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" style={{display: "flex", justifyContent: "center"}}>
            <div className="footer__logo" style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <h1>ImmaTheRealtor</h1>
              <div style={{
                display: "flex",
                justifyContent: "space-between",

              }}>
              <img
                  className="img-fluid"
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                  alt="EXP Realty Logo"
                src={"/images/explogo.png"}
              />
              <img
                className="img-fluid"
                  src={"/images/hofitlogo.png"}
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                alt="Hofit Yanev Team Logo"
                />
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__content">
              <h3>Brokerage location</h3>
              <ul>
                <li>
                  9-196 Osborne St Winnipeg, MB R3L 1Z3
                </li>
                <li>
                  <GoLocation />{" "}
                  <a
                    href="https://maps.app.goo.gl/JLmbW7dqkWBX7Jat9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View map location
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-6" style={{
              display: "flex",
              justifyContent: "center"
            }}>
            <div className="footer__social" style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <h1>Social Connection</h1>
              <ul>
                {/* <li>
                  <a
                    href="https://www.facebook.com"
                    aria-label="Facebook"
                    className="icon"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    aria-label="Twitter"
                    className="icon"
                  >
                    <FaTwitter />
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.instagram.com/imma_drealtor"
                    aria-label="Instagram"
                    className="icon"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Whatsapp"
                    href="tel:+1 (431) 334-7223"
                    className="icon"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright m-20px-t m-20px-b">
          <div className="row">
            <div className="col-12">
            <p className="m-0 text-center">&copy; {new Date().getFullYear()} All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
