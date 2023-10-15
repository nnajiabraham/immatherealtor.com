import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";


const Footer = () => {
  return (
    <div className="footer footer-padding-t">
      <div className="container">
        <div className="row footer-padding">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__logo">
              <h1>Reala.</h1>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__content">
              <h3>Venue Location</h3>
              <ul>
                <li>
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </li>
                <li>
                  <GoLocation />{" "}
                  <a
                    href="https://www.google.com/maps/place/United+States/@37.2755783,-104.6571311,5z/data=!3m1!4b1!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View map location
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer__social">
              <h3>Social Connection</h3>
              <p>You should connect social area for any update</p>
              <ul>
                <li>
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
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    aria-label="Instagram"
                    className="icon"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Whatsapp"
                    href="tel:+880123456789"
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
