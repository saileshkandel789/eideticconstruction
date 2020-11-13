import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { teamGet } from "../../../actions/contactUsActions";
import AdminTeamList from "./AdminTeamList";
import AdminNavbar from "../adminNavbar";

class AdminTeamLists extends Component {
  componentDidMount() {
    this.props.teamGet();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.teamGet !== prevProps.teamGet) {
      return this.props.teamGet;
    }
  }

  render() {
    let teamlist = this.props.dashboardData.teamData.map((team) => (
      <AdminTeamList
        key={team._id}
        id={team._id}
        name={team.name}
        position={team.position}
        image={team.image}
      />
    ));
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
                      <th>Name</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody >
                    {teamlist}
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
  errors: state.errors,
  dashboardData: state.dashboard,
});

export default connect(mapStateToProps, { teamGet })(AdminTeamLists);
