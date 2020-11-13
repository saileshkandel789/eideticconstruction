import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ContactDetail(props) {
  return (
    <div className="col-md-4 col-sm-6 ">
      <div className="contactbox">
        <div className="contact-info">
          <h3>{props.name}</h3>
          <p>{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.message}</p>
          <p>{props.subject}</p>
        </div>
      </div>
    </div>
  );
}
