import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { serviceGet } from "../../../actions/contactUsActions";
import Header from "../../layout/Header";
import ServiceList from "./ServiceHomeList";
import { Footer } from "../../layout/Footer";

class ServicePage extends Component {
  componentDidMount() {
    this.props.serviceGet();
  }

  render() {
    let servicelist = this.props.dashboardData.serviceData.map((service) => (
      <ServiceList
        key={service._id}
        id={service._id}
        title={service.title}
        short_description={service.short_description}
        image={service.image}
      />
    ));
    return (
      <Fragment>
        <Header />
        <section className="pt-100 pb-50 servicePage">
          <div className="container">
            <h2 className=" service-mb">Our Services</h2>
            <div className="row justify-content-center">{servicelist}</div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps, { serviceGet })(ServicePage);
