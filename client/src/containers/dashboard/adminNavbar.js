import React, { useEffect,Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import Logo from "../../images/logo3.png";

const AdminNavbar = (props) => {
  

  return (
    <Fragment>
    <div id="mobilenav"></div>
    <div className="admin-navbar" id="navbar">
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" className="img-fluid" />
        </div>
      </Link>

      <ul>
        <li>
          <Link
            to="/addBlog"
            className={classnames({
              ishover: props.location.pathname === "/addBlog",
            })}
          >
            addblog
          </Link>
        </li>
        {/* className={classnames({ "is-invalid": errors.email })} */}

        <li>
          <Link
            to="/addService"
            className={classnames({
              ishover: props.location.pathname === "/addService",
            })}
          >
            addservice
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/serviceList"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/serviceList",
            })}
          >
            serviceList
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/blogList"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/blogList",
            })}
          >
            blogList
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/contactUs"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/contactUs",
            })}
          >
            ContactList
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addBanner"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/addBanner",
            })}
          >
            AddBanner
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/bannerList"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/bannerList",
            })}
          >
            BannerList
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addProject"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/addProject",
            })}
          >
            AddProject
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/ProjectList"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/ProjectList",
            })}
          >
            ProjectList
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addTeam"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/addTeam",
            })}
          >
            AddTeam
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/addVideo"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/addVideo",
            })}
          >
            AddVideo
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/Videolist"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/Videolist",
            })}
          >
            VideoList
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/TeamList"
            className={classnames({
              ishover: props.location.pathname === "/dashboard/TeamList",
            })}
          >
            TeamList
          </Link>
        </li>
      </ul>
    </div>
    
    </Fragment>
  );
};

export default withRouter(AdminNavbar);
