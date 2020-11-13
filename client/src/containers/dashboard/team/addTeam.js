import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { GET_ERRORS } from "../../../actions/types";
import axios from "axios";
import { API } from "../../../config";
import AdminNavbar from "../adminNavbar";

class AddTeam extends Component {
  state = {
    _id: "",
    name: "",
    position: "",
    image: "",
    errors: "",
  };

  onSubmit = this.onSubmit.bind(this);

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  ondispatcherror = (err) => (dispatch) => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  };
  componentDidMount() {
    if (this.props.match.params && this.props.match.params.teamId) {
      axios
        .get(`${API}/team/${this.props.match.params.teamId}`)
        .then((res) =>
          this.setState({
            name: res.data.name,
            position: res.data.position,
            image: res.data.image,
            _id: this.props.match.params.teamId,
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
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.image);
    fd.append("name", this.state.name);
    fd.append("position", this.state.position);
    fd.append("_id", this.state._id);
    fd.append("isAuth" , this.props.auth.isAuthenticated );


    axios
      .post(`${API}/team`, fd)
      .then((res) =>
        this.setState({
          name: "",
          position: "",
          image: "",
          _id: "",
        })
      )
      .catch((err) => this.ondispatcherror(err));
  }

  render() {
    const { errors } = this.state;
    console.log(this.props, "prop");

    const handleChange = (name) => (event) => {
      const value =
        name === "image" ? event.target.files[0] : event.target.value;
      // console.log(value, "value");
      this.setState({ image: value });
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
                  <h3 className="large ">
                    {this.props.match.params.teamId ? "Edit Team" : "Add Team"}
                  </h3>

                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange.bind(this)}
                        />
                      </div>
                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="text"
                          placeholder="Position"
                          name="position"
                          value={this.state.position}
                          onChange={this.onChange.bind(this)}
                        />
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

AddTeam.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(AddTeam));
