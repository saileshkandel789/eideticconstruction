import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../images/logo1.png";
import {
  faMapMarkerAlt,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="logo-footer-container lfc">
                <img src={Logo} alt="logo" className="img-fluid" />
                <p>
                  <strong>
                    A complete All in one solution for residential homes and
                    commercial buildings
                  </strong>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <div className="icon-info">
                      <strong>address</strong>
                      bhaktapur gathhaghar,Nepal
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <div className="icon-info">
                      <strong>phone</strong>
                      9845111789
                    </div>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFax} />
                    <div className="icon-info">
                      <strong>fax</strong>
                      014481110
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="logo-footer-container">
                <h4>About Us</h4>
                <ul>
                  <li>Our Products</li>
                  <li>About Us</li>
                  <li>Our Services</li>
                  <li>Our Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <span>Copyright © 2020 Eidetic</span>
            </div>
            <div className="col-md-4 col-sm-6">
              <span>Designed by : sk company</span>
            </div>
            {/* <div className="col-md-4 col-sm-6">
              <span>Designed by : sk sailesh</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
