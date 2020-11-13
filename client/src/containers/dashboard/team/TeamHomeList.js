import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { imageAPI } from "../../../config";


export default function TeamList(props) {
  useEffect(() => {}, []);
  return (
    // <div className="col-md-3 col-sm-6">
    <div className="project-tab">
      <div className="post-box">
        <div className="post-img">
          <img
            className="img-fluid"
            src={`${imageAPI}/${props.image}`}
          />
        </div>
        <div className="post-info">
          <h3>{props.name}</h3>
          <p>{props.position}</p>
        </div>
      </div>
    </div>
    // </div>
  );
}
