import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {imageAPI} from "../../../config";

export default function ProjectTab(props) {
  useEffect(() => {}, []);
  return (
    <div className="project-tab">
      <Link to={`/blog/${props.id}`}>
        <div className="post-box">
          <div className="post-img">
            <img
              className="img-fluid"
              src={`${imageAPI}/${props.image}`}
            />
          </div>
          <div className="post-info">
            <h3>{props.title}</h3>
            <p>{props.short_description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
