import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { projectGet } from "../../../actions/contactUsActions";
import ProjectList from "./AdminProjectList";
import AdminNavbar from "../adminNavbar";

class AdminProjectList extends Component {
  componentDidMount() {
    this.props.projectGet();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.projectGet !== prevProps.projectGet) {
      return this.props.projectGet;
    }
  }
// shouldComponentUpdate(prevProps){
//   if (this.props.projectGet !== prevProps.projectGet) {
//     return this.props.projectGet;
//   }
// }
  render() {
    let projectlist = this.props.dashboardData.projectData.map((project) => (
      // console.log(blog, "blg")
      <ProjectList
        key={project._id}
        id={project._id}
        title={project.title}
        location={project.location}
        category={project.category}
        image={project.image}
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
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody >
                  {projectlist}
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

export default connect(mapStateToProps, { projectGet })(AdminProjectList);
