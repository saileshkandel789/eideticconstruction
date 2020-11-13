import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "../src/actions/authActions";
import { Provider } from "react-redux";
import { compose } from "redux";
import "./App.css";
// import Navbar from "./containers/layout/Navbar";
import Home from "./containers/layout/Home";
import Register from "./containers/auth/register";
// import About from "./containers/about";
// import Resume from "./containers/resume";
import Login from "./containers/auth/login";
import Dashboard from "./containers/dashboard";
import Contact from "./containers/layout/Contact";
import addBlog from "./containers/dashboard/blog/addBlog";
import Blog from "./containers/layout/Blog";
import BlogDesc from "./containers/layout/BlogDesc";
import AddService from "./containers/dashboard/service/addService";
import Booknow from "./containers/layout/Booknow";
import AdminBlogList from "./containers/dashboard/blog/blogList";
import ContactUs from "./containers/dashboard/contact/contactUs";
import AddBanner from "./containers/dashboard/banner/bannerAdd";
import BannerList from "./containers/dashboard/banner/bannerList";
import PrivateRoute from "./containers/auth/PrivateRoute";
import Sidebar from "./containers/sidebar/sidebar";
import AdminServiceList from "./containers/dashboard/service/adminServiceList";
import store from "./store";
import ServiceDetail from "./containers/dashboard/service/ServiceDetail";
import AddProject from "./containers/dashboard/project/projectAdd";
import AdminProjectLists from "./containers/dashboard/project/AdminProjectLists";
import AddTeam from "./containers/dashboard/team/addTeam";
import AdminTeamLists from "./containers/dashboard/team/AdminTeamLists";
import ServicePage from "./containers/dashboard/service/ServicePage";
// import AddVideo from "./containers/dashboard/video/AddVideo";
import AddVideo from "./containers/dashboard/vdo/upload";
import VideoShow from "./containers/dashboard/vdo/videoShow";
import VideoPlay from "./containers/dashboard/vdo/videoPlayer";
import AdminVideo from "./containers/dashboard/vdo/videoDashboard";

import IndexVideo from "./containers/dashboard/video/IndexVideo";
// check for token
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            {/* <Navbar /> */}
            {<Sidebar />}
            <Route exact path="/" component={Home} />
            <Switch>
              {/* <Route exact path="/about" component={About} />
                <Route exact path="/resume" component={Resume} /> */}
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/contact" component={Contact} />
              <PrivateRoute exact path="/addBlog" component={addBlog} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:blogId" component={BlogDesc} />
              <PrivateRoute exact path="/addService" component={AddService} />
              <Route exact path="/bookNow" component={Booknow} />
              <PrivateRoute
                exact
                path="/dashboard/blogList"
                component={AdminBlogList}
              />
              <PrivateRoute
                exact
                path="/blog/edit/:blogId"
                component={addBlog}
              />
              <PrivateRoute
                exact
                path="/dashboard/contactUs"
                component={ContactUs}
              />
              <PrivateRoute
                exact
                path="/dashboard/addBanner"
                component={AddBanner}
              />
              <PrivateRoute
                exact
                path="/dashboard/bannerList"
                component={BannerList}
              />
              <PrivateRoute
                exact
                path="/dashboard/serviceList"
                component={AdminServiceList}
              />
              <PrivateRoute
                exact
                path="/service/edit/:serviceId"
                component={AddService}
              />
              <Route exact path="/service" component={ServicePage} />
              <Route
                exact
                path="/service/:serviceId"
                component={ServiceDetail}
              />
              <PrivateRoute
                exact
                path="/dashboard/addProject"
                component={AddProject}
              />
              

              <PrivateRoute
                exact
                path="/dashboard/ProjectList"
                component={AdminProjectLists}
              />
              <PrivateRoute
                exact
                path="/project/edit/:projectId"
                component={AddProject}
              />
              <PrivateRoute
                exact
                path="/dashboard/addTeam"
                component={AddTeam}
              />
              <PrivateRoute
                exact
                path="/dashboard/TeamList"
                component={AdminTeamLists}
              />
              <PrivateRoute
                exact
                path="/team/edit/:teamId"
                component={AddTeam}
              />
              <PrivateRoute
                exact
                path="/banner/edit/:bannerId"
                component={AddBanner}
              />
              <PrivateRoute
                exact
                path="/dashboard/addVideo"
                component={AddVideo}
              />
              <Route exact path="/video" component={VideoShow} />
              <Route exact path="/video/:videoTitle" component={VideoPlay} />
              
              <PrivateRoute
                exact
                path="/dashboard/Videolist"
                component={AdminVideo}
              />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
