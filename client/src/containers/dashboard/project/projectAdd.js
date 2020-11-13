import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { GET_ERRORS } from "../../../actions/types";
import axios from "axios";
import { API } from "../../../config";
import AdminNavbar from "../adminNavbar";

class AddProject extends Component {
  state = {
    title: "",
    category: [],
    location: "",
    image: "",
    errors: "",
  };

  onSubmit = this.onSubmit.bind(this);

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // ondispatcherror = (err) => (dispatch) => {
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data,
  //   });
  // };
  componentDidMount() {
    if (this.props.match.params && this.props.match.params.projectId) {
      axios
        .get(`${API}/project/${this.props.match.params.projectId}`)
        .then((res) =>
          this.setState({
            title: res.data.title,
            category: res.data.category,
            location: res.data.location,
            image: res.data.image,
          })
        )
        .catch((err) => console.log(err));
    }
  }
  //   componentWillReceiveProps(nextProps) {
  //     if (nextProps.errors) {
  //       this.setState({ errors: nextProps.errors });
  //     }
  //   }

  onSubmit(e) {
    console.log(this.state, "state");
    let cat = this.state.category;
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.image);
    fd.append("title", this.state.title);
    fd.append("category", this.state.category);
    fd.append("location", this.state.location);
    fd.append("isAuth" , this.props.auth.isAuthenticated );

    axios
      .post(`${API}/project`, fd)
      .then((res) =>
        this.setState({
          title: "",
          category: [],
          location: "",
          image: "",
        })
      )
      .catch((err) => this.ondispatcherror(err));
  }

  render() {
    const { errors } = this.state;
    // console.log(this.state, "stt");
    let categoryState = [
      { id: 1, name: "house" },
      { id: 2, name: "partypalace" },
      { id: 3, name: "interior design" },
      { id: 4, name: "construction" },
    ];

    const handleChange = (name) => (event) => {
      const value =
        name === "image" ? event.target.files[0] : event.target.value;
      // console.log(value, "value");
      this.setState({ image: value });
    };
    const handleServiceChange = (e, event) => {
      if (e.target.checked) {
        //append to array
        this.setState({
          category: this.state.category.concat(event.target.value),
        });
        console.log(this.state.category);
      } else {
        //remove from array
        this.setState({
          category: this.state.category.filter(function (val) {
            return val !== event.target.value;
          }),
        });
      }
    };
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
                <div className="contact-wrap">
                  <h3 className="large ">Add Project</h3>

                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="text"
                          placeholder="Title"
                          name="title"
                          value={this.state.title}
                          onChange={this.onChange.bind(this)}
                        />
                      </div>
                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="text"
                          placeholder="location"
                          name="location"
                          value={this.state.location}
                          onChange={this.onChange.bind(this)}
                        />
                      </div>
                      <div className="form-group col-md-11 mx-auto project-category">
                        <p>Select category</p>
                        {categoryState.map((serv) => (
                          <label
                            key={serv.id}
                            className={classnames({
                              bgblue: this.state.category.includes(
                                `${serv.name}`
                              ),
                            })}
                          >
                            <input
                              type="checkbox"
                              name={serv.name}
                              onChange={(e) =>
                                handleServiceChange(e, {
                                  target: { value: serv.name },
                                })
                              }
                            />

                            {serv.name}
                          </label>
                        ))}
                      </div>

                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          onChange={handleChange("image")}
                        />
                      </div>
                      <div className=" col-md-12 ">
                        <input type="submit" className="btn btn-info " value="Submit" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
       

      </Fragment>
    );
  }
}

AddProject.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(AddProject));
