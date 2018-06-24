import { GET_MATCHES } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_MATCHES:
      return action.payload;
    default:
      return state;
  }
};
