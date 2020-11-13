import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { blogGet } from "../../../actions/contactUsActions";
import Header from "../../layout/Header";
import BlogList from "../../layout/AdminBlogList";
import { Footer } from "../../layout/Footer";
import AdminNavbar from "../adminNavbar";

class AdminBlogList extends Component {
  componentDidMount() {
    this.props.blogGet();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.blogGet !== prevProps.blogGet) {
      return this.props.blogGet;

      // return true;
    }
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
        category={blog.category}

        
      />
    ));
    return (
      <Fragment>
      
        <div className="admin-dashboard-section">
          
            <div className="dashboard-header">
              <h3>admin section</h3>
            </div>
            <div className="row">
              <div className="col-md-2">
                <AdminNavbar />
              </div>
              <div className="col-md-10">
              <table className= "table" >
                <thead className= "table-head">
                  <tr className= "table-head-each">
                    <th >Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody >
                  {bloglist}
                </tbody>
              </table>
                
              </div>
            </div>
          </div>
     
        
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps, { blogGet })(AdminBlogList);
