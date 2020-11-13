import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BannerGet } from "../../../actions/contactUsActions";
import Header from "../../layout/Header";
import BannerListItem from "./bannerListItem";
import { Footer } from "../../layout/Footer";
import AdminNavbar from "../adminNavbar";

class BannerList extends Component {
  componentDidMount() {
    this.props.BannerGet();
  }
  // shouldComponentUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.BannerGet !== prevProps.BannerGet) {
  //     return this.props.BannerGet;
  //     return true;
  //   }
  // }

  render() {
    let bannerlist = this.props.dashboardData.bannerData.map((banner) => (
      <BannerListItem
        key={banner._id}
        id={banner._id}
        title={banner.title}
        image={banner.image}
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
                    <th>Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody >
                  {bannerlist}
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

export default connect(mapStateToProps, { BannerGet })(BannerList);
