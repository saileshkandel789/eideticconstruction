import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { serviceGet } from "../../../actions/contactUsActions";
import ServiceList from "./ServiceHomeList";

class ServiceHome extends Component {
  componentDidMount() {
    this.props.serviceGet();
  }

  render() {
    let serviceList = this.props.dashboardData.serviceData.map((service) => (
      // console.log(blog, "blg")
      <ServiceList
        key={service._id}
        title={service.title}
        short_description={service.short_description}
        image={service.image}
      />
    ));
    return (
      <Fragment>
        <section className="service ">
          {/* <div className="image-layer pt-100 pb-50"></div> */}
          <div className="container">
            <div className="service-title ">
              <div className="service-title-inner text-center">
                <span>Our Service</span>
                <h2>We Will Satisfy You By Our Servicing Plan</h2>
              </div>
            </div>
            <div className="row justify-content-center">{serviceList}</div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps, { serviceGet })(ServiceHome);
