import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { teamGet } from "../../../actions/contactUsActions";
import TeamList from "./TeamHomeList";
import axios from "axios";
import { API } from "../../../config";
import classnames from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TeamHome extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios.get(`${API}/team`).then((res) => {
      this.setState({
        data: res.data,
      });
      console.log(this.state, "ssssss");
    });
  }
  //   shouldComponentUpdate(prevProps, prevState, snapshot) {
  //     if (this.state.data !== prevState.data()) {
  //       return true;
  //     }
  //   }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    let teamlist = this.state.data.map((team) => (
      <TeamList
        key={team._id}
        id={team._id}
        name={team.name}
        position={team.position}
        image={team.image}
      />
    ));

    return (
      <section className="pt-100 pb-50 teamHome">
        <div className="container">
          <div className="project-title">
            <div className="project-title-inner">
              <span>Team members</span>
              <h2>Our Expert Team Members Will Help You</h2>
            </div>
          </div>

          <Slider {...settings}>{teamlist}</Slider>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps, { teamGet })(TeamHome);
