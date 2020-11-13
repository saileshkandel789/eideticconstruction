import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import dashboardReducer from "./dashboardReducer";
import navReducers from "./navReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  dashboard: dashboardReducer,
  nav: navReducers,
});
