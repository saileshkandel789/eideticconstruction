import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { GET_ERRORS } from "../../../actions/types";
import axios from "axios";
import { API } from "../../../config";
import AdminNavbar from "../adminNavbar";

class AddBanner extends Component {
  state = {
    _id: "",
    title: "",
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
    if (this.props.match.params && this.props.match.params.bannerId) {
      axios
        .get(`${API}/banner/${this.props.match.params.bannerId}`)
        .then((res) => {
          this.setState({
            _id: this.props.match.params.bannerId,
            title: res.data.title,
            image: res.data.image,
          });
        })
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

    // fd.append("image", this.state.image, this.state.image.name);
    fd.append("image", this.state.image);
    fd.append("title", this.state.title);
    fd.append("_id", this.state._id);
    fd.append("isAuth" , this.props.auth.isAuthenticated );


    axios
      .post(`${API}/banner`, fd)
      .then((res) =>
        this.setState({
          title: "",
          image: "",
          _id: "",
        })
      )
      .catch((err) => this.ondispatcherror(err));
  }

  render() {
    const { errors } = this.state;
    // console.log(this.props, "prop");

    const handleChange = (name) => (event) => {
      const value =
        name === "image" ? event.target.files[0] : event.target.value;
      //   console.log(value, "value");
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
              <div className="col-md-10 contact-wrap">
                {/* <section className="container"> */}
                <h3 className="">
                  {this.props.match.params.bannerId
                    ? "Edit Banner"
                    : "Add Banner"}
                </h3>
                <form className="form" onSubmit={this.onSubmit}>
                  <div className="form-group ">
                    <input
                      type="text"
                      placeholder="Title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange.bind(this)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleChange("image")}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Submit"
                  />
                </form>
                {/* </section> */}
              </div>
            </div>
          </div>

      </Fragment>
    );
  }
}

AddBanner.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(AddBanner));
