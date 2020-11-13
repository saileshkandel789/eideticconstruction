import isEmpty from "../validation/is-empty";
import { OPEN_NAV, CLOSE_NAV } from "../actions/types";

const initialState = {
  isOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_NAV:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_NAV:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}
