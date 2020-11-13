import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { projectGet } from "../../../actions/contactUsActions";
import ProjectTab from "./projectHomeTab";
import axios from "axios";
import { API,imageAPI } from "../../../config";
import classnames from "classnames";

class ProjectHome extends Component {
  state = {
    data: [],
    category: "",
  };
  componentDidMount() {
    axios.get(`${API}/project`).then(
      (res) =>
        this.setState({
          data: res.data,
        })
      // console.log(res, "res")
    );
  }
  //   shouldComponentUpdate(prevProps, prevState, snapshot) {
  //     if (this.state.data !== prevState.data()) {
  //       return true;
  //     }
  //   }
  getData = (name) => {
    axios
      .get(`${API}/project?projectCategory=${name}`)
      .then(
        (res) =>
          this.setState({
            data: res.data,
            category: name,
          })
        // console.log(res, "res")
      )
      .catch((err) => console.log(err));
  };
  render() {
    // let projectlist = this.props.dashboardData.projectData.map((project) => (
    //   // console.log(blog, "blg")

    //   <ProjectTab
    //     id={project._id}
    //     title={project.title}
    //     short_description={project.category}
    //     location={project.location}
    //     image={project.image}
    //   />
    // ));
    let categoryState = [
      { id: 1, name: "house" },
      { id: 2, name: "partypalace" },
      { id: 3, name: "interior design" },
      { id: 4, name: "construction" },
    ];
    return (
      <section className=" projectHome">
        <div className="container">
          <div className="project-title">
            <div className="project-title-inner">
              <span>Projects</span>
              <h2>Our Latest Projects</h2>
            </div>
          </div>
          <div className="project-tab-wrap">
            <ul>
              <li
                onClick={() => this.getData("")}
                className={classnames({
                  borderBottom: this.state.category === "",
                })}
              >
                All
              </li>
              {categoryState.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => this.getData(cat.name)}
                  className={classnames({
                    borderBottom: this.state.category === cat.name,
                  })}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="row justify-content-center">
            {this.state.data.map((each) => (
              <div className="col-md-3 mb-4 col-sm-6" key={each._id}>
                <img src={`${imageAPI}/${each.image}`}></img>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps, { projectGet })(ProjectHome);
