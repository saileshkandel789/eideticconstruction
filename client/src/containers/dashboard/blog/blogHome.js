import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { blogGet } from "../../../actions/contactUsActions";
import BlogList from "../../layout/BlogList";


class BlogHome extends Component {
  componentDidMount() {
    this.props.blogGet();
  }

  render() {
    let bloglist = this.props.dashboardData.blogData.map((blog) => (
      // console.log(blog, "blg")
      <BlogList
        key={blog._id}
        id={blog._id}
        title={blog.title}
        short_description={blog.short_description}
        image={blog.image}
      />
    ));
    return (
      <Fragment>
        <section className="pt-100 pb-50">
          <div className="container">
            <div className="sec-title">
              <div className="sec-title-inner">
                <span>Our Blog</span>
                <h3>Our Latest News</h3>
              </div>
            </div>
            {/* <p style= {{fontFamily: 'Mukta Mahee'}}>हेल्लो क गर्दै </p> */}
            <div className="row justify-content-center">{bloglist}</div>
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

export default connect(mapStateToProps, { blogGet })(BlogHome);
