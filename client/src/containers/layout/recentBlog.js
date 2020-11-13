import React from "react";
import { Link } from "react-router-dom";
import {imageAPI} from "../../config";


export const RecentBlog = (props) => {
  return (
    <Link to={`/blog/${props.id}`}>
      <div className="post-box-recent">
        <img
          className="img-fluid"
          src={`${imageAPI}/${props.image}`}
        />
        <h6>{props.title}</h6>
      </div>
    </Link>
  );
};
