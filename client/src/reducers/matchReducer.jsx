import {
  GET_PRO_MATCHES,
  GET_PUBLIC_MATCHES,
  GET_MATCH
} from "../actions/types";

const initial = {
  proMatches: [],
  publicMatches: [],
  match: null
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_PRO_MATCHES:
      return { ...state, proMatches: action.payload };
    case GET_PUBLIC_MATCHES:
      return { ...state, publicMatches: action.payload };
    case GET_MATCH:
      return { ...state, match: action.payload };
    default:
      return state;
  }
};
