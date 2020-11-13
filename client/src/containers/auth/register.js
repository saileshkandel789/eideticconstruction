import React, { Component,Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import axios from "axios";
import { API } from "../../config";
import Header from "../layout/Header";
import {Footer} from "../layout/Footer";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  };
  onSubmit = this.onSubmit.bind(this);

    // componentDidMount() {
    //   if (this.props.auth.isAuthenticated) {
    //     this.props.history.push("/dashboard");
    //   }
    // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    // const { user } = this.props.auth;
    const { errors } = this.state;
    console.log(this.props.errors, "state");

    return (
      <Fragment>
      <Header/>
      <section className="container loginmargin contact-wrap">
        {/* {user ? user.name : null} */}
        <h1 className="large ">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form noValidate className="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={classnames({ "is-invalid": errors.name })}
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange.bind(this)}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              className={classnames({ "is-invalid": errors.email })}
              placeholder="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.onChange.bind(this)}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
           
          </div>
          <div className="form-group">
            <input
              type="password"
              className={classnames({ "is-invalid": errors.password })}
              placeholder="Password"
              name="password"
              minLength="6"
              value={this.state.password}
              onChange={this.onChange.bind(this)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className={classnames({ "is-invalid": errors.password2 })}
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={this.state.password2}
              onChange={this.onChange.bind(this)}
            />
            {errors.password2 && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
          </div>
          <input type="submit" className="btn " value="Register" />
        </form>
        {/* <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p> */}
      </section>
      <Footer/>
      </Fragment>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
