import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { blogGet } from "../../actions/contactUsActions";
import Header from "./Header";
import BlogList from "./BlogList";
import { Footer } from "./Footer";

class Blog extends Component {
  componentDidMount() {
    this.props.blogGet();
  }

  render() {
    let bloglist = this.props.dashboardData.blogData.map((blog) => (
      // console.log(blog, "blg")
      <BlogList
        id={blog._id}
        title={blog.title}
        short_description={blog.short_description}
        image={blog.image}
      />
    ));
    return (
      <Fragment>
        <Header />
        <section className="pt-100 pb-50">
          <div className="container">
            <h2 className=" service-mb">Our Blogs</h2>
            <div className="row justify-content-center">{bloglist}</div>
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

export default connect(mapStateToProps, { blogGet })(Blog);
