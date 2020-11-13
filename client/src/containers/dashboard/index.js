import React, { Fragment, useEffect } from "react";
import AdminNavbar from "./adminNavbar";
import { Footer } from "../layout/Footer";
import Header from "../layout/Header";
import { withRouter } from "react-router-dom";

const DashboardIndex = (props) => {
  // useEffect(() => {
  //   console.log(props.location.pathname, "jkjkjkkjS");
  // }, []);
  return (
    <Fragment>
      <div className="admin-dashboard-section">
        <div className="row">
          <div className="col-md-2">
            <AdminNavbar />
          </div>
          <div className="col-md-10">
            <div className="dashboard-header">
              <h3>admin section</h3>
            </div>
            <h4>admin index page</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(DashboardIndex);
