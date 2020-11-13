import React, { Fragment, useEffect } from "react";
// import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "./Footer";
import Headers from "./Header";
import Testimonial from "./Testimonial";
import Banner from "../dashboard/banner/bannerHome";
import BlogHome from "../dashboard/blog/blogHome";
import ServiceHome from "../dashboard/service/ServiceHome";
import ProjectHome from "../dashboard/project/ProjectHome";
import TeamHome from "../dashboard/team/TeamHome";
import VideoHome from "../dashboard/vdo/VideoHome";

import WhyUs from "./WhyUs";
const Landing = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <Fragment>
      <Headers />
      <Banner />
      <ServiceHome />
      <WhyUs />
      <Testimonial />
      <ProjectHome />
      <VideoHome />
      <BlogHome />
      <TeamHome />
      <Footer />
    </Fragment>
  );
};

export default Landing;
