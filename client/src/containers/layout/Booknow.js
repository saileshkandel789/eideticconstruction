import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { blogGet } from "../../actions/contactUsActions";
import Header from "./Header";
import BlogList from "./BlogList";
import { Footer } from "./Footer";
import Select from "react-select";
import classnames from "classnames";
import axios from "axios";
import { API } from "../../config";
import { GET_ERRORS } from "../../actions/types";

class Booknow extends Component {
  state = {
    service: [],
    location: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  };

  componentDidMount() {}
  onSubmit = this.onSubmit.bind(this);
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
      location: this.state.location,
      address: this.state.address,
      service: this.state.service,
    };

    // this.props.contactUs(messagedetail);
    axios
      .post(`${API}/booknow`, messagedetail)
      .then((res) =>
        this.setState({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
          address: "",
          service: [],
        })
      )
      .catch((err) => this.ondispatcherror(err));
  }

  handleChange = (e, event) => {
    if (e.target.checked) {
      //append to array
      this.setState({
        service: this.state.service.concat([event.target.value]),
      });
    } else {
      //remove from array
      this.setState({
        service: this.state.service.filter(function (val) {
          return val !== event.target.value;
        }),
      });
    }
  };
  handleStateChange = (event) => {
    this.setState({ location: event.target.value });
  };
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // console.log(this.state, "pp");
    let serviceState = [
      { id: 1, name: "water proofing work" },
      { id: 2, name: "prefab house construction" },
      { id: 3, name: "furniture" },
    ];
    let locationState = [
      { id: 0, name: "please select" },
      { id: 1, name: "chitwan" },
      { id: 2, name: "kathmandu" },
      { id: 3, name: "bhaktapur" },
      { id: 4, name: "lalitpur" },
      { id: 5, name: "others" },
    ];

    return (
      <Fragment>
        <Header />
        <section className="pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-10">
                <form noValidate className="form" onSubmit={this.onSubmit}>
                  <div className="booknow-form-wrap">
                    <div className="booknow-form-header">
                      <h3>Select service</h3>
                    </div>
                    <div className="booknow-form-content">
                      <div className="booknow-location">
                        <select onChange={this.handleStateChange}>
                          {locationState.map((loc) => (
                            <option value={loc.name} key={loc.id}>
                              {loc.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="booknow-service">
                        {serviceState.map((serv) => (
                          <label
                            key={serv.id}
                            className={classnames({
                              bgblue: this.state.service.includes(
                                `${serv.name}`
                              ),
                            })}
                          >
                            <input
                              type="checkbox"
                              name={serv.name}
                              onChange={(e) =>
                                this.handleChange(e, {
                                  target: { value: serv.name },
                                })
                              }
                            />

                            {serv.name}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="booknow-account-detail">
                      <div className="booknow-accdetail-header">
                        <h3>Account Details</h3>
                      </div>
                      <div className="booknow-accdetail-content">
                        <div className="row">
                          <div className="form-group col-md-6 col-sm-12">
                            <input
                              type="text"
                              placeholder="Your Name"
                              name="name"
                              value={this.state.name}
                              onChange={this.onChange.bind(this)}
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-12">
                            <input
                              type="email"
                              placeholder="Your Email"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChange.bind(this)}
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-12">
                            <input
                              type="text"
                              placeholder="Phone"
                              name="phone"
                              value={this.state.phone}
                              onChange={this.onChange.bind(this)}
                            />
                          </div>
                          <div className="form-group col-md-6 col-sm-12">
                            <input
                              type="text"
                              placeholder="Address"
                              name="address"
                              value={this.state.address}
                              onChange={this.onChange.bind(this)}
                            />
                          </div>
                          <div className="form-group col-md-12">
                            <textarea
                              name="message"
                              placeholder="Your Message.."
                              rows="4"
                              cols="50"
                              value={this.state.message}
                              onChange={this.onChange.bind(this)}
                            />
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
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4 col-sm-10">
                <div className="booking-summary-wrap">
                  <h3>Booking summary</h3>
                  <ul>
                    <li>
                      <strong>Location : </strong>{" "}
                      {this.state.location ? this.state.location : ""}
                    </li>
                    <li>
                      <strong>Services : </strong>

                      {this.state.service.length > 0
                        ? this.state.service.join()
                        : ""}
                    </li>
                    <li>
                      <strong>Name : </strong>
                      {this.state.name ? this.state.name : ""}
                    </li>
                    <li>
                      <strong> Email : </strong>

                      {this.state.email ? this.state.email : ""}
                    </li>
                    <li>
                      <strong> Address : </strong>

                      {this.state.address ? this.state.address : ""}
                    </li>
                    <li>
                      <strong> Phone : </strong>

                      {this.state.phone ? this.state.phone : ""}
                    </li>
                    <li>
                      <strong> Message : </strong>

                      {this.state.message ? this.state.message : ""}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps)(Booknow);
