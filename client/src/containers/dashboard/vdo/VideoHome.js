import React , {Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { API } from "../../../config";




class VideoHome extends React.Component {

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

    const videos = this.state.videoList.map(video => {
      return (
        <div className="video col-xs-12 col-sm-12 col-md-3 col-lg-3 mb-5" key={video._id}>
          <Link to={'/video/' + video.upload_title}>
            <div className="video-thumbnail">
              <img src={video.thumbnail_path} alt="video thubmnail" />
            </div>
          </Link>
          <span className="video-title">{video.upload_title.replace(/_/g, ' ')}</span>
        </div>
      );
    });

    return (
        <Fragment>
            <section className="videohome">
                <div className="container ">
                <h2 style= {{textAlign:"center", marginBottom: "30px"}}> Our Videos</h2>

                <div className="streams row">
                    {videos}
                </div>
                </div>
            </section>
        </Fragment>
    );
  }
}

export default VideoHome;