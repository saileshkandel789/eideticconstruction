import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { teamDelete, teamGet } from "../../../actions/contactUsActions";
import { imageAPI } from "../../../config";


const AdminTeamList = (props) => {
  useEffect(() => {}, []);
  const isAuth = props.auth.isAuthenticated;

  const onDelete = (id , isAuth) => {
    props.teamDelete(id,isAuth);
    props.teamGet();
  };
  return (
          <tr>
            <td>
              <img
                  className="img-fluid"
                  src={`${imageAPI}/${props.image}`}
                  style={{ width: "100px" }}
                />
            </td>
            <td>
              <h5>{props.name}</h5>
            </td>
            <td>
            <Link to={`/team/edit/${props.id}`}>
              <FontAwesomeIcon
                icon={faEdit}
                style={{ color: "#ff5e15", marginRight: "10px" }}
              />
            </Link>
            </td>
            <td>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "#ff5e15" }}
                onClick={() => onDelete(props.id,isAuth)}
              />
            </td>
          </tr>
   
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { teamDelete, teamGet })(AdminTeamList);
