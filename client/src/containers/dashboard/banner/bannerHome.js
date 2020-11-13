import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerGet } from "../../../actions/contactUsActions";
import {imageAPI} from "../../../config";

class BannerHome extends Component {
  componentDidMount() {
    this.props.BannerGet();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <section id="bannerHome">
        <div>
          <Slider {...settings}>
            {this.props.dashboardData.bannerData.map((banner) => (
              <div key={banner._id} className="banner">
                <img
                  src={`${imageAPI}/${banner.image}`}
                  alt={banner.title}
                  className="img-fluid"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}

BannerHome.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps, { BannerGet })(withRouter(BannerHome));
