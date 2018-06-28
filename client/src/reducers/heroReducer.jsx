import { GET_HEROES } from "../actions/types";

const initial = {
  heroes: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_HEROES:
      return { ...state, heroes: action.payload };
    default:
      return state;
  }
};
