import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Logo from "../../images/mobilenavlogo2.png";
import classnames from "classnames";

class Navbar extends Component {
  state = {
    imgShow: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 230;
      // console.log(window.scrollY, "top");
      const nav = document.getElementById("navbar");
      if (isTop) {
        nav.classList.add("scrolled");
        this.setState({ imgShow: true });
      } else {
        nav.classList.remove("scrolled");
        this.setState({ imgShow: false });
      }
    });
  }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll");
  // }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </Fragment>
    );

    return (
      <div className="menu-wrap" id="navbar">
        <div
          className={classnames({
            container: this.state.imgShow === false,
          })}
        >
          <nav className="navbar nav-wrap">
            {this.state.imgShow ? (
              <Link to="/">
                <div className="logo">
                  <img src={Logo} alt="logo" className="img-fluid" />
                </div>
              </Link>
            ) : (
              ""
            )}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {isAuthenticated ? authLinks : ""}
              <li>
                <Link to="/blog">blog</Link>
              </li>
              <li>
                <Link to="/video" > Video </Link>
              </li>
              {this.state.imgShow ? (
                <li>
                  <Link to="/bookNow">Booknow</Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
