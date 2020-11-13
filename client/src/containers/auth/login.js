import React, { Component,Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import Header from "../layout/Header";
import {Footer} from "../layout/Footer";


import classnames from "classnames";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: "",
  };

  onSubmit = this.onSubmit.bind(this);

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

    componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;
    console.log(errors,'err')

    return (
      <Fragment>
        <Header />
      <section className="container loginmargin contact-wrap">
        {errors? (
          <div className="alert alert-danger">Invalid credentials</div>
        ) : (
          ""
        )}
        <h1 className="large ">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Sign into Your Account
        </p>
        <form noValidate className="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className={classnames({ "is-invalid": errors.email })}
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
              placeholder="Password"
              className={classnames({ "is-invalid": errors.password })}
              name="password"
              value={this.state.password}
              onChange={this.onChange.bind(this)}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <input type="submit" className="btn " value="Login" />
        </form>
        {/* <p className="my-1">
          Don't have an account? <a href="register.html">Sign Up</a>
        </p> */}
      </section>
      <Footer />
      </Fragment>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
