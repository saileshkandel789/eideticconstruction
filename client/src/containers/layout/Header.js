import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faMapMarkerAlt,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
// import { blogGet } from "../../actions/contactUsActions";
import Navbar from "./Navbar";
import Logo from "../../images/logo3.png";
import Sidebarnav from "../sidebar/sidebarNav";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";

class Headers extends Component {
  //   componentDidMount() {
  //     this.props.blogGet();
  //   }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    return (
      <header>
        <div className="topbar">
          <div className="container">
            <div className="topbar-inner">
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ color: "#ff5e15", marginRight: "10px" }}
                  />
                  Gatthaghar,Bhaktapur
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    size="x"
                    style={{ color: "#ff5e15", marginRight: "10px" }}
                  />
                  saileshkandel789@gmail.com
                </li>
              </ul>
              <ul>
                {this.props.auth.isAuthenticated ? (
                  <li>
                    <a
                      href="#"
                      onClick={this.onLogoutClick.bind(this)}
                      style={{ color: "#fff" }}
                    >
                      Logout
                    </a>
                  </li>
                ) : (
                  <Fragment>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="topbar-mobile ">
          <div className="container">
            <div className="">
              <ul>
                <li>
                  <IconContext.Provider
                    value={{ className: "socialmedia-icon" }}
                  >
                    <a
                      href="https://www.facebook.com/eideticengineering/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </IconContext.Provider>
                </li>
                <li>
                  <IconContext.Provider
                    value={{ className: "socialmedia-icon" }}
                  >
                    <a
                      href="https://www.facebook.com/eideticengineering/"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </IconContext.Provider>
                </li>
                {this.props.auth.isAuthenticated ? (
                  <li>
                    <a
                      href="#"
                      onClick={this.onLogoutClick.bind(this)}
                      style={{ color: "#fff" }}
                    >
                      Logout
                    </a>
                  </li>
                ) : (
                  <Fragment>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </Fragment>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="logo-info-bar-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="logo-info-bar-inner">
                  <div className="logo">
                    <Link to="/">
                      <img src={Logo} alt="logo" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="socialmedia-link">
                    <ul>
                      <li>
                        <IconContext.Provider
                          value={{ className: "socialmedia-icon" }}
                        >
                          <a
                            href="https://www.facebook.com/eideticengineering/"
                            target="_blank"
                          >
                            <FaFacebookF />
                          </a>
                        </IconContext.Provider>
                      </li>
                      <li>
                        <IconContext.Provider
                          value={{ className: "socialmedia-icon" }}
                        >
                          <a
                            href="https://www.facebook.com/eideticengineering/"
                            target="_blank"
                          >
                            <FaTwitter />
                          </a>
                        </IconContext.Provider>
                      </li>
                      <li>
                        <IconContext.Provider
                          value={{ className: "socialmedia-icon" }}
                        >
                          <a
                            href="https://www.facebook.com/eideticengineering/"
                            target="_blank"
                          >
                            <FaWhatsapp />
                          </a>
                        </IconContext.Provider>
                      </li>
                    </ul>
                  </div>
                  <div className="callus">
                    <FontAwesomeIcon
                      icon={faPhoneVolume}
                      style={{ fontSize: "2rem" }}
                    />
                    <div className="callus-info">
                      <span>24/7 Phone service</span>
                      <strong>9851102724 </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 ">
                <ul style={{ textAlign: "right" }}>
                  <li className="booknow-header">
                    <Link to="/bookNow">BookNow</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
        <Sidebarnav />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Headers);
