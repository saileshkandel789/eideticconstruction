import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Man from "../../images/rameshkharel.jpg";
import Man2 from "../../images/man1.jpg";

export default class Testimonial extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <section id="testimonial">
        <div className="container">
          {/* <div className="row"> */}
          <h2>WHAT CLIENTS SAYS? </h2>
          <div className="testi-slider-wrap">
            <Slider {...settings}>
              <div className="testi-box-wrap">
                <div className="testi-box">
                  <div className="testi-img">
                    <img
                      src={Man}
                      alt="client"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="testi-info">
                    <h3>"Ramesh Kharel"</h3>
                    <p>
                      Interesting design and concept, beautiful presentation and
                      functional features are what make this theme worth your
                      time, money and effort.
                    </p>
                    <span className="">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="testi-box-wrap">
                <div className="testi-box">
                  <div className="testi-img">
                    <img
                      src={Man2}
                      alt="client"
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="testi-info">
                    <h3>"Bishwash kc"</h3>
                    <p>
                      Donec scelerisque dolor id nunc dictum, nterdum mauris
                      rhoncus. Aliquam at ultrices nunc. In sem fermentum at
                      lorem in, porta mauris.
                    </p>
                    <span className="">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3>3</h3>
              </div>
            </Slider>
          </div>
        </div>
        {/* </div> */}
      </section>
    );
  }
}
