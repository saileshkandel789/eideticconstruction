import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { GET_ERRORS } from "../../../actions/types";
import axios from "axios";
import { API } from "../../../config";
import Header from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import AdminNavbar from "../adminNavbar";
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";

class AddVideo extends Component {
  state = {
    _id: "",
    title: "",
    description: "",
    file: "",
    duration:"",
    thumbnail:"",
    errors: "",
  };

  onSubmit = this.onSubmit.bind(this);

  onChange(e) {
      console.log(this.state,'kk')
    this.setState({ [e.target.name]: e.target.value });
  }
  ondispatcherror = (err) => (dispatch) => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  };
  componentDidMount() {
    if (this.props.match.params && this.props.match.params.videoId) {
      axios
        .get(`${API}/video/${this.props.match.params.videoId}`)
        .then((res) =>
          this.setState({
            title: res.data.title,
            description: res.data.description,
            _id: res.data._id,
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
    const variables = {
      title: this.state.title,
      description: this.state.description,
      file: this.state.file,
      duration:this.state.duration,
      thumbnail:this.state.thumbnail,
    }
    // console.log(this.state.duration,this.state.thumbnail,'hh')

    axios
      .post(`${API}/video/uploadVideo`, variables)
      .then((res) => { 
        if(res.data.success) {
          alert("video uploaded successfully")
        }else {
          alert("Failed to upload video")
        }
      }
      )
      .catch((err) => this.ondispatcherror(err));
  }
   onDrop =  (files) => {
       let formData = new FormData();
       const config = {
           header : {'content-type' : "multipart/form-data"}
       }
       formData.append("file" , files[0]);
       axios
      .post(`${API}/video`, formData,config)
      .then((res) =>
        {
            if(res.data.success) {
              // console.log(res,'hlhlh');
              let variable = {
                filePath: res.data.filePath,
                fileName: res.data.fileName
            }
            this.setState({file: res.data.filePath})

            //generate thumbnail with this filepath ! 
            axios.post(`${API}/video/thumbnail` , variable)
            .then(response => {
              if(response.data.success) {
                  this.setState({duration : response.data.fileDuration})
                  this.setState({thumbnail : response.data.thumbsFilePath})

              }else {
                alert("failed to make the thumbnail")
              }
            })

            }else {
                alert("failed to save video in server");
            }
        }
      )
      .catch((err) => this.ondispatcherror(err));


    // console.log(files);
  }

  render() {
    const { errors } = this.state;
    console.log(this.props, "prop");

    // const handleChange = (name) => (event) => {
    //   const value =
    //     name === "image" ? event.target.files[0] : event.target.value;
    //   // console.log(value, "value");
    //   this.setState({ image: value });
    // };

    return (
      <Fragment>
        <Header />
        <div className="admin-dashboard-section">
          <div className="container">
            <div className="dashboard-header">
              <h3>admin section</h3>
            </div>
            <div className="row">
              <div className="col-md-3">
                <AdminNavbar />
              </div>
              <div className="col-md-9">
                <div className="contact-wrap">
                  <h3 className="large ">
                    {this.props.match.params.videoId ? "Edit Video" : "Add Video"}
                  </h3>

                  <form className="form" onSubmit={this.onSubmit}>
                    <div className="row">
                    <div className="form-group col-md-10 col-sm-10">
                        <Dropzone 
                        onDrop={this.onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <FontAwesomeIcon
                                 icon={faPlus}
                                    style={{ color: "#ff5e15" }}
                                    />

                            </div>
                        )}
                    </Dropzone>
                    {this.state.thumbnail !== "" &&
                        <div>
                            <img src={`http://localhost:4000/${this.state.thumbnail}`} alt="haha" />
                            <p>{this.state.thumbnail}</p>

                        </div>
                    }
                        </div>
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
                          placeholder="Description"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange.bind(this)}
                        />
                      </div>

                     
                      <div className=" col-md-12 ">
                        <input type="submit" className="btn " value="Submit" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}



const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(withRouter(AddVideo));
