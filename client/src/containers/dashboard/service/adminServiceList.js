import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { serviceGet } from "../../../actions/contactUsActions";
import Header from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import AdminNavbar from "../adminNavbar";
import ServiceList from "./ServiceList";

class AdminServiceList extends Component {
  componentDidMount() {
    this.props.serviceGet();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.serviceGet !== prevProps.serviceGet) {
      return this.props.serviceGet;
    }
  }

  render() {
    let serviceList = this.props.dashboardData.serviceData.map((service) => (
      <ServiceList
        id={service._id}
        key={service._id}
        title={service.title}
        short_description={service.short_description}
        description={service.description}
        image={service.image}
      />
    ));
    return (
      <Fragment>
        <div className="admin-dashboard-section">
          
            <div className="dashboard-header">
              <h3>admin section</h3>
            </div>
            <div className="row">
              <div className="col-md-2">
                <AdminNavbar />
              </div>
              <div className="col-md-10">
              <table className= "table" >
                <thead className= "table-head">
                  <tr className= "table-head-each">
                    <th >Image</th>
                    <th>Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody >
                  {serviceList}
                </tbody>
              </table>
                </div>
            </div>
          </div>
       
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps, { serviceGet })(AdminServiceList);
