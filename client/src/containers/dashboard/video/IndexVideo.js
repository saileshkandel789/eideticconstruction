import React, { useEffect, useState,Fragment } from 'react';
import axios from 'axios';
import moment from 'moment';
import { API } from "../../../config";


function LandingPage() {

    const [Videos, setVideos] = useState([])

    useEffect(() => {
        axios.get(`${API}/video/getVideo`)
            .then(response => {
                console.log(response,'resp')
                setVideos(response.data);
                // if (response.data.success) {
                //     console.log(response.data.videos)
                //     setVideos(response.data.videos)
                // } else {
                //     alert('Failed to get Videos')
                // }
            })
            console.log(Videos,'kkk')
    }, [])





    const renderCards = Videos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return (
        
            <div style={{ position: 'relative' }} key= {video._id}>
                <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:4000/${video.thumbnail}`} />
                <video style={{ width: '100%' }} src={`http://localhost:4000/${video.file}`} controls></video>
                <div className=" duration"
                    style={{ bottom: 0, right:0, position: 'absolute', margin: '4px', 
                    color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8, 
                    padding: '2px 4px', borderRadius:'2px', letterSpacing:'0.5px', fontSize:'12px',
                    fontWeight:'500', lineHeight:'12px' }}>
                    <span>{minutes} : {seconds}</span>
                </div>
                <span>{video.title} </span><br />
            <span style={{ marginLeft: '3rem' }}> {video.views}</span>
            - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
            </div>
           
            
       
        )

    })



    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2>hello video</h2>
            <hr />

            
                {renderCards}
           
        </div>
    )
}

export default LandingPage;