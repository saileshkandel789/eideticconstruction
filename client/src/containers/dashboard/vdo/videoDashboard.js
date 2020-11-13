import React , {Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { API } from "../../../config";
import AdminNavbar from "../adminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { videoDelete } from "../../../actions/contactUsActions";
import { connect } from "react-redux";



class VideoDashboard extends React.Component {

    state = {
      videoList: []
    }

  componentDidMount() {
    
      axios.get(`${API}/upload`).then(res => {
        this.setState({
          videoList: res.data
        });
      });
    
  }

  render() {
    const isAuth = this.props.auth.isAuthenticated;
    console.log(this.props.auth.isAuthenticated,'okok')
    const onDelete = (id , isAuth) => {
        
        this.props.videoDelete(id , isAuth);
        
      };
    const videos = this.state.videoList.map(video => {
      return (
        <tr key= {video._id}>
        <td>
          <img
              className="img-fluid"
              src={video.thumbnail_path}
              style={{ width: "100px" }}
            />
        </td>
        <td>
          <h5>{video.upload_title}</h5>
        </td>
        <td>
          <FontAwesomeIcon
            icon={faTrash}
            style={{ color: "#ff5e15" }}
            onClick={() => onDelete(video._id , isAuth)}
          />
        </td>
      </tr>
      );
    });

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
                <table className= "table" >
                  <thead className= "table-head">
                    <tr className= "table-head-each">
                      <th >Image</th>
                      <th>Title</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody >
                    {videos}
                  </tbody>
                </table>
                
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
export default connect(mapStateToProps, { videoDelete }) (VideoDashboard);