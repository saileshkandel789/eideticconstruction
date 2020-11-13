import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { contactGet } from "../../../actions/contactUsActions";
import Header from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import ContactDetail from "./contactDetail";
import AdminNavbar from "../adminNavbar";

class ContactUs extends Component {
  componentDidMount() {
    this.props.contactGet();
  }

  render() {
    let contactlist = this.props.dashboardData.contactData.map((contact) => (
      <ContactDetail
        key={contact._id}
        name={contact.name}
        email={contact.email}
        phone={contact.phone}
        message={contact.message}
        subject={contact.subject}
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
                <div className="container">
                  <div className="row">{contactlist}</div>
                </div>
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

export default connect(mapStateToProps, { contactGet })(ContactUs);
