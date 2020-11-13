import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { contactUs } from "../../actions/contactUsActions";
import classnames from "classnames";
import axios from "axios";
import { API } from "../../config";
import { GET_ERRORS } from "../../actions/types";
import Header from "./Header";
import { Footer } from "./Footer";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    errors: {},
  };
  onSubmit = this.onSubmit.bind(this);

  //   componentDidMount() {
  //     if (this.props.auth.isAuthenticated) {
  //       this.props.history.push("/dashboard");
  //     }
  //   }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  ondispatcherror = (err) => (dispatch) => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  };
  onSubmit(e) {
    e.preventDefault();

    const messagedetail = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      subject: this.state.subject,
    };

    // this.props.contactUs(messagedetail);
    axios
      .post(`${API}/contact`, messagedetail)
      .then((res) =>
        this.setState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          errors: {},
        })
      )
      .catch((err) => this.ondispatcherror(err));
  }
  render() {
    // const { user } = this.props.auth;
    const { errors } = this.state;
    // console.log(this.props.errors, "state");

    return (
      <Fragment>
        <Header />

        <section id="contact-section">
          <div className="container">
            <div className="contact-wrap">
              <h3 className="large ">Send Message Us</h3>

              <form noValidate className="form" onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="form-group col-md-6 col-sm-10">
                    <input
                      type="text"
                      className={classnames({ "is-invalid": errors.name })}
                      placeholder="Your Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange.bind(this)}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-group col-md-6 col-sm-10">
                    <input
                      type="email"
                      className={classnames({ "is-invalid": errors.email })}
                      placeholder="Your Email Id"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange.bind(this)}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group col-md-6 col-sm-10">
                    <input
                      type="text"
                      className={classnames({ "is-invalid": errors.phone })}
                      placeholder="Phone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.onChange.bind(this)}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                  <div className="form-group col-md-6 col-sm-10">
                    <input
                      type="text"
                      className={classnames({ "is-invalid": errors.subject })}
                      placeholder="Subject"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.onChange.bind(this)}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject}</div>
                    )}
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      name="message"
                      placeholder="Your Message.."
                      rows="4"
                      cols="50"
                      className={classnames({ "is-invalid": errors.subject })}
                      value={this.state.message}
                      onChange={this.onChange.bind(this)}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject}</div>
                    )}
                  </div>
                  <div className="col-md-12">
                    <input
                      type="submit"
                      className="btn "
                      value="Submit"
                      style={{
                        "background-color": " #212529",
                        color: "#fff",
                        "text-transform": "uppercase",
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

Contact.propTypes = {
  contactUs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { contactUs })(withRouter(Contact));
