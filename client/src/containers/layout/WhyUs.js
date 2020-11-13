import React, { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faPaintBrush,
  faUser,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

const WhyUs = () => {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 4000,
  //     offset: 120, // offset (in px) from the original trigger point
  //     delay: 1000, // values from 0 to 3000, with step 50ms
  //     easing: "ease", // default easing for AOS animations
  //     once: false,
  //   });
  // }, []);
  return (
    <section id="whyUs">
      <div className="container">
        <div className="whyUs-header" data-aos="fade-up">
          <h2>Why choose us?</h2>
          <p>We are always ready to best solution for your problem.</p>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="whyus-list" >
              <FontAwesomeIcon icon={faPaintBrush} className="abc" />
              <h3>200+</h3>
              <p>Total design project is completed</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6" >
            <div className="whyus-list">
              <FontAwesomeIcon icon={faTrophy} className="abc" />
              <h3>10+</h3>
              <p>Best Interior Design Award</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6" >
            <div className="whyus-list">
              <FontAwesomeIcon icon={faUser} className="abc" />
              <h3>1000+</h3>
              <p>Satisfied clients all over nepal</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="whyus-list" >
              <FontAwesomeIcon icon={faHouseUser} className="abc" />
              <h3>200+</h3>
              <p>Total House design and construction is completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
