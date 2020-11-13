import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { API } from "../config";

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${API}/users/register`, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(`${API}/users/login`, userData)
    .then((res) => {
      // save to localStorage
      const { token } = res.data;
      // set token to ls
      localStorage.setItem("jwtToken", token);
      // set token to Auth Header
      setAuthToken(token);
      // Decode Token to get user data
      const decoded = jwt_decode(token);
      // set current User
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
