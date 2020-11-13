import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import AdminNavbar from "../adminNavbar";
import axios from "axios";
import { API } from "../../../config";

class AddService extends Component {
  state = {
    _id: "",
    title: "",
    short_description: "",
    description: "",
    image: "",
    errors: "",
  };

  onSubmit = this.onSubmit.bind(this);

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    this.setState({ description: data });
  };

  //   componentWillReceiveProps(nextProps) {
  //     if (nextProps.errors) {
  //       this.setState({ errors: nextProps.errors });
  //     }
  //   }
  componentDidMount() {
    if (this.props.match.params && this.props.match.params.serviceId) {
      axios
        .get(`${API}/service/${this.props.match.params.serviceId}`)
        .then((res) =>
          this.setState({
            _id: res.data._id,
            title: res.data.title,
            short_description: res.data.short_description,
            description: res.data.description,
            image: res.data.image,
          })
        )
        .catch((err) => console.log(err));
    }
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state, "data");
    const fd = new FormData();
    fd.append("image", this.state.image);
    fd.append("title", this.state.title);
    fd.append("short_description", this.state.short_description);
    fd.append("description", this.state.description);
    fd.append("_id", this.state._id);
    fd.append("isAuth" , this.props.auth.isAuthenticated );


    // const { title, description, short_description } = this.state;
    // const info = { title, description, short_description };

    axios
      .post(`${API}/service`, fd)
      .then((res) =>
        this.setState({
          title: "",
          short_description: "",
          description: "",
          image: "",
          _id: "",
        })
      )
      .catch((err) => console.log(err, "err"));
  }

  render() {
    const { errors } = this.state;
    console.log(this.state, "stat");

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
              <div className="col-md-10 ">
                <section className="contact-wrap">
                  <h3 className=" ">Add Service</h3>
                  <form className="form" onSubmit={this.onSubmit}>
                    <div className= "row">
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
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleChange("image")}
                      />
                    </div>
                    <div className="form-group col-md-11 col-sm-10 mx-auto">
                      <CKEditor
                        editor={ClassicEditor}
                        //   name="description"
                        data={this.state.description}
                        // value={this.state.description}
                        onInit={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        config={{
                          ckfinder: {
                            uploadUrl: `${API}/service`,
                            // uploadUrl: "http://localhost:4000/ups",
                          },
                        }}
                        onChange={this.handleCkeditorState.bind(this)}
                      />
                      {errors.description && (
                        <div className="invalid-feedback">
                          {errors.description}
                        </div>
                      )}
                    </div>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-info"
                      value="Submit"
                    />
                  </form>
                </section>
              </div>
            </div>
          </div>
      

      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});


export default connect(mapStateToProps)(withRouter(AddService));
