import React , {Fragment} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { API } from "../../../config";
import Header from "../../layout/Header";
import {Footer} from "../../layout/Footer";


import videojs from 'video.js';

class VideoPlayer extends React.Component {
 state = {
      loaded: false,
      videoJsOptions: null
    }
  

  componentDidMount() {
    axios.get(`${API}/upload`).then(res => {
      res.data.map(video => {
        if (video.upload_title === this.props.match.params.videoTitle) {
          this.setState({
            loaded: true,
            videoJsOptions: {
              autoplay: false,
              controls: true,
              sources: [{
                src: video.video_path
              }],
              fluid:true
            }
          }, () => {
            this.player = videojs(this.videoNode, this.state.videoJsOptions, function onPlayerReady() {
              // console.log('onPlayerReady', this)
            });
          });
        }
      });
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
          <div className="row" style={{ width: "100vw" }}>
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 mx-auto mt-5">
              {this.state.loaded ? (
                <div data-vjs-player>
                  <video ref={node => this.videoNode = node} className="video-js vjs-big-play-centered" />
                </div>
              ) : ' Loading ... '}
            </div>
          </div>
          <Footer />
        </Fragment>
    );
  }
}

export default VideoPlayer;