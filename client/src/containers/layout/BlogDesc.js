import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { API ,imageAPI} from "../../config";
import Header from "./Header";
import { RecentBlog } from "./recentBlog";


const BlogDesc = (props) => {
  const [blog, setBlog] = useState({});
  const [error, setError] = useState(false);

  const loadSingleBlog = (blogId) => {
    axios
      .get(`${API}/blog/${blogId}`)
      .then((res) => setBlog(res.data))
      .catch((err) => setError(err));
  };

  useEffect(() => {
    const blogId = props.match.params.blogId;
    // console.log(props, "pro");
    loadSingleBlog(blogId);
    console.log(blog, "blg");
  }, [props]);

  return (
    <Fragment>
      <Header />
      <section className="pt-100 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="blog-detail-wrap">
                <h2>{blog.title}</h2>
                <div className="d-flex blog-calendar">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    size="x"
                    // style={{ color: "#ff5e15", marginRight: "10px" }}
                  />

                  <p>Added on {moment(blog.createdAt).fromNow()}</p>
                </div>

                <img
                  src={`${imageAPI}/${blog.image}`}
                  className="img-fluid"
                  alt="ddd"
                />

                <p>{blog.short_description}</p>
                <p>{blog.description}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="recent-post-wrap">
                <h2>RECENT POSTS</h2>
                {props.dashboardData.blogData.map((blog) => (
                  <RecentBlog
                    id={blog._id}
                    title={blog.title}
                    image={blog.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps)(BlogDesc);
