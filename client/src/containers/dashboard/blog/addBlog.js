import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { GET_ERRORS } from "../../../actions/types";
import axios from "axios";
import { API } from "../../../config";
import AdminNavbar from "../adminNavbar";

class AddBlog extends Component {
  state = {
    _id: "",
    title: "",
    category: "",
    short_description: "",
    description: "",
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
    if (this.props.match.params && this.props.match.params.blogId) {
      axios
        .get(`${API}/blog/${this.props.match.params.blogId}`)
        .then((res) => {
          console.log(res, "res");
          this.setState({
            _id: this.props.match.params.blogId,
            title: res.data.title,
            category: res.data.category,
            short_description: res.data.short_description,
            description: res.data.description,
            image: res.data.image,
          });
        })
        .catch((err) => console.log(err));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.image);
    fd.append("title", this.state.title);
    fd.append("category", this.state.category);
    fd.append("short_description", this.state.short_description);
    fd.append("description", this.state.description);
    fd.append("_id", this.state._id);
    fd.append("isAuth" , this.props.auth.isAuthenticated );


    axios
      .post(`${API}/blog`, fd)
      .then((res) =>
        this.setState({
          title: "",
          category: "",
          short_description: "",
          description: "",
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
                    {this.props.match.params.blogId ? "Edit Blog" : "Add Blog"}
                  </h3>

                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="text"
                          placeholder="Title"
                          className={classnames({ "is-invalid": errors.title })}
                          name="title"
                          value={this.state.title}
                          onChange={this.onChange.bind(this)}
                        />
                        {errors.title && (
                          <div className="invalid-feedback">{errors.title}</div>
                        )}
                      </div>
                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="text"
                          placeholder="Category"
                          className={classnames({
                            "is-invalid": errors.category,
                          })}
                          name="category"
                          value={this.state.category}
                          onChange={this.onChange.bind(this)}
                        />
                        {errors.category && (
                          <div className="invalid-feedback">
                            {errors.category}
                          </div>
                        )}
                      </div>
                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="text"
                          placeholder="short description"
                          className={classnames({
                            "is-invalid": errors.short_description,
                          })}
                          name="short_description"
                          value={this.state.short_description}
                          onChange={this.onChange.bind(this)}
                        />
                        {errors.short_description && (
                          <div className="invalid-feedback">
                            {errors.short_description}
                          </div>
                        )}
                      </div>
                      <div className="form-group col-md-6 col-sm-10">
                        <input
                          type="text"
                          placeholder="description"
                          className={classnames({
                            "is-invalid": errors.description,
                          })}
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange.bind(this)}
                        />
                        {errors.description && (
                          <div className="invalid-feedback">
                            {errors.description}
                          </div>
                        )}
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
                        <input type="submit" className="btn btn-info" value="Submit" />
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

AddBlog.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(AddBlog));
