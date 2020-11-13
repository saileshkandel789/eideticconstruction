import React, { Component, Fragment } from "react";
import Logo from "../../images/logo3.png";
import { Link } from "react-router-dom";
import { openNav } from "../../actions/contactUsActions";
import { connect } from "react-redux";

class SidebarNav extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 160;
      // console.log(window.scrollY, "top");
      const nav = document.getElementById("mobilenav");
      if (isTop) {
        nav.classList.add("scrolledmob");
      } else {
        nav.classList.remove("scrolledmob");
      }
    });
  }
  render() {
    return (
      <Fragment>
        <div className="mobile-nav" id="mobilenav">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="mobile-booknow-btn">
            <Link to="/booknow">booknow</Link>
          </div>
          <div
            className="DrawerToggle"
            onClick={() => {
              this.props.openNav();
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps, { openNav })(SidebarNav);
