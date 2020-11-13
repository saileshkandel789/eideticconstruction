import axios from "axios";
import {
  GET_ERRORS,
  GET_BLOG_DATA,
  GET_BLOG_DESC,
  DELETE_BLOG_DATA,
  GET_CONTACT_DATA,
  GET_BANNER_DATA,
  DELETE_BANNER_DATA,
  OPEN_NAV,
  CLOSE_NAV,
  GET_SERVICE_DATA,
  DELETE_SERVICE_DATA,
  GET_PROJECT_DATA,
  DELETE_PROJECT_DATA,
  GET_TEAM_DATA,
  DELETE_TEAM_DATA,
  DELETE_VIDEO_DATA
} from "./types";
import { API } from "../config";

export const contactUs = (message) => (dispatch) => {
  axios
    .post(`${API}/contact`, message)
    .then((res) => console.log(res))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const openNav = () => (dispatch) => {
  dispatch({
    type: OPEN_NAV,
  });
};

export const closeNav = () => (dispatch) => {
  dispatch({
    type: CLOSE_NAV,
  });
};
export const blogGet = () => (dispatch) => {
  axios
    .get(`${API}/blog`)
    .then((res) =>
      dispatch({
        type: GET_BLOG_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const blogDelete = (id,isAuth) => (dispatch) => {
  axios
    .post(`${API}/blog/${id}`, {"isAuth":isAuth})
    .then((res) =>
      dispatch({
        type: DELETE_BLOG_DATA,
        payload: id,
      })
    )
    .catch(
      (err) => console.log(err, "err")
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
    );
};

export const contactGet = () => (dispatch) => {
  axios
    .get(`${API}/contact`)
    .then((res) =>
      dispatch({
        type: GET_CONTACT_DATA,
        payload: res.data,
      })
    )
    .catch(
      (err) => console.log(err, "err")
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
    );
};

export const BannerGet = () => (dispatch) => {
  axios
    .get(`${API}/banner`)
    .then((res) =>
      dispatch({
        type: GET_BANNER_DATA,
        payload: res.data,
      })
    )
    .catch(
      (err) => console.log(err, "err")
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
    );
};

export const bannerDelete = (id,isAuth) => (dispatch) => {
  axios
    .post(`${API}/banner/${id}`, {"isAuth":isAuth})
    .then((res) =>
      dispatch({
        type: DELETE_BANNER_DATA,
        payload: id,
      })
    )
    .catch(
      (err) => console.log(err, "err")
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
    );
};

export const serviceGet = () => (dispatch) => {
  axios
    .get(`${API}/service`)
    .then((res) =>
      dispatch({
        type: GET_SERVICE_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const serviceDelete = (id,isAuth) => (dispatch) => {
  axios
    .post(`${API}/service/${id}`, {"isAuth":isAuth})
    .then((res) =>
      dispatch({
        type: DELETE_SERVICE_DATA,
        payload: id,
      })
    )
    .catch(
      (err) => console.log(err, "err")
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
    );
};
export const projectGet = () => (dispatch) => {
  axios
    .get(`${API}/project`)
    .then((res) =>
      dispatch({
        type: GET_PROJECT_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
export const projectDelete = (id , isAuth) => (dispatch) => {
  // console.log(isAuth,'olol')
  // const abc = {isAuth:isAuth};
  // console.log(abc ,'abc')
  // const fd = new FormData();
  //   fd.append("isAuth" , isAuth );
  axios
    .post(`${API}/project/${id}`, {"isAuth":isAuth})
    .then((res) =>
      dispatch({
        type: DELETE_PROJECT_DATA,
        payload: id,
      })
    )
    .catch((err) => console.log(err, "err"));
};
export const teamGet = () => (dispatch) => {
  axios
    .get(`${API}/team`)
    .then((res) =>
      dispatch({
        type: GET_TEAM_DATA,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
export const teamDelete = (id , isAuth) => (dispatch) => {
  axios
    .post(`${API}/team/${id}`, {"isAuth":isAuth})
    .then((res) =>
      dispatch({
        type: DELETE_TEAM_DATA,
        payload: id,
      })
    )
    .catch((err) => console.log(err, "err"));
};
export const videoDelete = (id , isAuth) => (dispatch) => {
  axios
    .post(`${API}/upload/${id}`, {"isAuth":isAuth})
    .then((res) =>
      dispatch({
        type: DELETE_VIDEO_DATA,
        payload: id,
      })
    )
    .catch((err) => console.log(err, "err"));
};