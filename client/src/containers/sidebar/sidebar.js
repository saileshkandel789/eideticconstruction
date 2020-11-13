import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo3.png";
import classes from "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { closeNav } from "../../actions/contactUsActions";
import { connect } from "react-redux";

const Sidebar = (props) => {
  // const [isClose, setIsClose] = useState(false);

  const { isAuthenticated } = props.auth;
  const authLinks = (
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
  );

  return (
    <div
      className={classnames({
        close: props.nav.isOpen !== true,
      })}
      // className={attachedClasses}
    >
      <div className="SideDrawer">
        {/* <div> */}
        <div className="logo-sidebar">
          <div
            className="blackleft"
            onClick={() => {
              props.closeNav();
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{
                color: "#fff",
                marginRight: "10px",
                fontSize: "30px",
              }}
            />
          </div>

          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
            {isAuthenticated ? authLinks : ""}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nav: state.nav,
  auth: state.auth,
});

export default connect(mapStateToProps, { closeNav })(Sidebar);
