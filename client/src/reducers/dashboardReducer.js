import {
  GET_BLOG_DATA,
  GET_BLOG_DESC,
  DELETE_BLOG_DATA,
  GET_CONTACT_DATA,
  GET_BANNER_DATA,
  DELETE_BANNER_DATA,
  GET_SERVICE_DATA,
  DELETE_SERVICE_DATA,
  GET_PROJECT_DATA,
  DELETE_PROJECT_DATA,
  GET_TEAM_DATA,
  DELETE_TEAM_DATA,
} from "../actions/types";

const initialState = {
  blogData: [],
  contactData: [],
  bannerData: [],
  serviceData: [],
  projectData: [],
  teamData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BLOG_DATA:
      return {
        ...state,
        blogData: action.payload,
      };
    case DELETE_BLOG_DATA:
      return {
        ...state,
        blogData: state.blogData.filter((item) => item.id !== action.payload),
      };
    case GET_CONTACT_DATA:
      return {
        ...state,
        contactData: action.payload,
      };
    case GET_BANNER_DATA:
      return {
        ...state,
        bannerData: action.payload,
      };
    case DELETE_BANNER_DATA:
      return {
        ...state,
        bannerData: state.bannerData.filter(
          (item) => item.id !== action.payload
        ),
      };
    case GET_SERVICE_DATA:
      return {
        ...state,
        serviceData: action.payload,
      };
    case DELETE_SERVICE_DATA:
      return {
        ...state,
        serviceData: state.serviceData.filter(
          (item) => item.id !== action.payload
        ),
      };
    case GET_PROJECT_DATA:
      return {
        ...state,
        projectData: action.payload,
      };
    case DELETE_PROJECT_DATA:
      return {
        ...state,
        projectData: state.projectData.filter(
          (item) => item.id !== action.payload
        ),
      };
    case GET_TEAM_DATA:
      return {
        ...state,
        teamData: action.payload,
      };
    case DELETE_TEAM_DATA:
      return {
        ...state,
        teamData: state.teamData.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}
